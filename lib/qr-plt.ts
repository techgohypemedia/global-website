/**
 * HPGL / PLT output for QR codes.
 *
 * PLT files are plain-text HPGL command streams understood by vinyl cutters,
 * pen plotters and laser engravers. Coordinates are in plotter units
 * (1 unit = 0.025 mm, i.e. 40 units per mm) with the origin bottom-left.
 *
 * Each dark module run is emitted as a closed outline rectangle followed by
 * horizontal hatch lines so engravers produce a solid fill while cutters
 * can simply follow the outline.
 */
import QRCode from "qrcode";

export const PLT_UNITS_PER_MM = 40;

export type PltOptions = {
  /** Total label width/height in mm, quiet zone included. Default 40. */
  sizeMm?: number;
  /** Quiet-zone modules around the symbol. Default 4 (QR spec minimum). */
  margin?: number;
  /** Hatch line pitch in mm for filling dark areas. 0 disables hatching. */
  hatchMm?: number;
  /** Pen number used in the SP command. Default 1. */
  pen?: number;
};

type Run = { x: number; y: number; w: number };

/** Collapse each row of the QR matrix into horizontal runs of dark modules. */
export function darkRuns(
  modules: ArrayLike<number | boolean>,
  count: number,
): Run[] {
  const runs: Run[] = [];
  for (let y = 0; y < count; y++) {
    let x = 0;
    while (x < count) {
      if (!modules[y * count + x]) {
        x++;
        continue;
      }
      const start = x;
      while (x < count && modules[y * count + x]) x++;
      runs.push({ x: start, y, w: x - start });
    }
  }
  return runs;
}

/** Build the HPGL command stream for a QR module matrix. */
export function matrixToPlt(
  modules: ArrayLike<number | boolean>,
  count: number,
  opts: PltOptions = {},
): string {
  const sizeMm = Math.max(5, Math.min(500, opts.sizeMm ?? 40));
  const margin = Math.max(0, opts.margin ?? 4);
  const pen = Math.max(1, Math.round(opts.pen ?? 1));
  const totalModules = count + margin * 2;
  const total = Math.round(sizeMm * PLT_UNITS_PER_MM);
  const mod = total / totalModules;
  const hatch =
    opts.hatchMm === undefined
      ? Math.max(1, Math.round(mod / 4))
      : Math.round(opts.hatchMm * PLT_UNITS_PER_MM);
  const r = (v: number) => Math.round(v);
  // HPGL origin is bottom-left; QR rows run top to bottom.
  const toY = (row: number) => total - (margin + row) * mod;
  const toX = (col: number) => (margin + col) * mod;

  const out: string[] = ["IN;", `SP${pen};`, "PA;"];
  for (const run of darkRuns(modules, count)) {
    const x1 = r(toX(run.x));
    const x2 = r(toX(run.x + run.w));
    const yTop = r(toY(run.y));
    const yBot = r(toY(run.y + 1));
    out.push(
      `PU${x1},${yBot};PD${x2},${yBot},${x2},${yTop},${x1},${yTop},${x1},${yBot};`,
    );
    if (hatch > 0) {
      let dir = 1;
      for (let y = yBot + hatch; y < yTop; y += hatch) {
        const [a, b] = dir > 0 ? [x1, x2] : [x2, x1];
        out.push(`PU${a},${y};PD${b},${y};`);
        dir = -dir;
      }
    }
  }
  out.push("PU0,0;", "SP0;", "IN;");
  return out.join("\n") + "\n";
}

/** Encode `text` as a QR code and return its PLT representation. */
export function qrToPlt(text: string, opts: PltOptions = {}): string {
  const qr = QRCode.create(text, { errorCorrectionLevel: "M" });
  return matrixToPlt(qr.modules.data, qr.modules.size, opts);
}
