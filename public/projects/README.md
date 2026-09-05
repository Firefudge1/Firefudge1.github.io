# Project images

Files the site looks for. Anything missing falls back to schematic line art —
nothing breaks, so add them whenever you have them.

## Already added

| Filename                  | Used for                                   |
| ------------------------- | ------------------------------------------ |
| `CSMRenderRayTracingss.png` | Corner Sensor Module — render, section hero |
| `CSMlayoutss.png`         | Corner Sensor Module — KiCad layout        |
| `CSMSchematicss.png`      | Corner Sensor Module — KiCad schematic     |
| `RearRightHarnessss.png`  | Vehicle Harness — RapidHarness drawing     |
| `InputModuledss1.png`     | Input Module — top-down render, hero       |
| `InputModuless2.png`      | Input Module — angled render               |
| `IMG_0840.JPG`            | FRC — Goldfish (senior year), section hero |
| `24kpic.png`              | FRC — 24K (junior year)                    |
| `goldrushpic.png`         | FRC — Gold Rush (sophomore year)           |
| `pyritepic.png`           | FRC — Pyrite (rookie year)                 |

## Still wanted — drop in with these exact names

Add the file, then ask Claude to wire it into `src/data/projects.js` — the paths
reference real filenames, so any name works.

| What is still missing                             | Goes to          |
| ------------------------------------------------- | ---------------- |
| Longhorn Racing FSAE car photo                    | Vehicle Harness  |
| Photo of the assembled CSM board (LED lit)        | Corner Sensor Module |
| Discharge Board KiCad layout render               | Discharge Board  |
| Franka Emika arm / RobIn Lab setup                | Cross-Medium Learning |

## Sizing

The first image in each project renders at 4:3, the rest at 16:10, both cropped
to fill — landscape sources work best. Aim for roughly 1600px wide and under
~500KB per file.

`IMG_0840.JPG` is currently 9.6MB at 6000x4000 and `goldrushpic.png` is 1.7MB;
both are far larger than the page needs and will slow first load noticeably.
Resizing them (Squoosh, Photos, Paint) is worth doing before this gets much
traffic.
