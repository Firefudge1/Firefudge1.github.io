const asset = (path) => `${import.meta.env.BASE_URL}projects/${path}`

export const projects = [
  {
    id: 'corner-sensor-module',
    name: 'Corner Sensor Module',
    org: 'Longhorn Racing · Formula SAE',
    dates: 'Sept 2025 – Present',
    blurb:
      'A 4-layer PCB that collects real-time suspension telemetry from four sensors and streams it over SPI and CAN.',
    metrics: [
      { value: '4', label: 'Sensors serviced' },
      { value: '<4 in²', label: 'Board footprint' },
      { value: '2', label: 'Design revisions' },
    ],
    images: [
      { src: asset('CSMRenderRayTracingss1.png'), alt: 'Ray-traced render of the Corner Sensor Module PCB' },
      { src: asset('CSMlayoutss.png'), alt: 'KiCad layout view of the Corner Sensor Module' },
      { src: asset('CSMSchematicss.png'), alt: 'KiCad schematic sheet for the Corner Sensor Module' },
    ],
    skills: ['KiCad', 'PCB Layout', 'STM32G474', 'C / FreeRTOS', 'SPI', 'CAN', 'SMT Soldering', 'Oscilloscope'],
    sections: [
      {
        heading: 'System Requirements',
        body: 'The board services four sensors — a sprung IMU, pushrod/pullrod potentiometer, control-arm strain gauge, and ToF ride-height sensor — and must interface tightly with the car’s dynamics. The final revision is condensed to a dual-sided, 4-layer board under four square inches.',
      },
      {
        heading: 'Process',
        body: 'I reviewed datasheets for each sensor and the STM32G474 to design appropriate filter and interface circuitry, then iterated the schematic across two design cycles against team feedback. I selected components to team standards and manufacturer recommendations, compiled a BOM optimized for bulk ordering, and hand-assembled the board — soldering and debugging hardware before moving to firmware.',
      },
      {
        heading: 'My Contributions',
        body: 'I own the board end-to-end: schematic and layout in KiCad, MCU and IO connector pinouts, assembly, debugging, and the C/FreeRTOS firmware that samples all four sensors and streams data over SPI and CAN.',
      },
    ],
  },
  {
    id: 'vehicle-harness',
    name: 'Vehicle Harness',
    org: 'Longhorn Racing · Formula SAE',
    dates: 'Sept 2025 – Present',
    blurb:
      'Full-vehicle wire harness modeled in SolidWorks and built in RapidHarness — I own the rear-right segment.',
    metrics: [
      { value: '275 mi', label: 'Testing supported' },
      { value: '2 mo', label: 'Earlier to first drive' },
      { value: '7', label: 'Subsystems in my segment' },
    ],
    images: [
      { src: asset('RearRightHarnessss.png'), alt: 'RapidHarness drawing of the rear-right harness segment' },
    ],
    skills: ['SolidWorks', 'RapidHarness', 'Harness Design', 'Connector Selection', 'BOM Generation', 'Design Review'],
    sections: [
      {
        heading: 'System Requirements',
        body: 'The harness delivers power and signal to every electronic device on the car. My rear-right segment services the low-voltage BMS, brake light, rear-right Corner Sensor Module, Upright Sensor Module, battery cooling fans, roll-hoop status light, and right-side emergency stop — while minimizing total length and unnecessary complexity.',
      },
      {
        heading: 'Process',
        body: 'I imported the vehicle frame reference into SolidWorks and added board enclosures, sketched the general layout, then translated it into RapidHarness. After refining the layout, choosing connectors and wires, and defining twisted-pair connections, we ran design reviews to validate electrical and mechanical compatibility — then returned to SolidWorks to align against the full vehicle CAD and pulled final lengths to complete the drawing and BOM.',
      },
      {
        heading: 'My Contributions',
        body: 'I own the rear-right segment and built the reference framework the rest of the team used for their sections, keeping the whole harness consistent. Its robustness supported 275 miles of testing and brought first-drive more than two months earlier than the prior season.',
      },
    ],
  },
  {
    id: 'discharge-board',
    name: 'Discharge Board',
    org: 'Longhorn Racing · Formula SAE',
    dates: 'Sept 2025 – Present',
    blurb:
      'A high-voltage PCB that bleeds the 546V tractive system to under 60V within five seconds of shutdown.',
    metrics: [
      { value: '546 V', label: 'Tractive system voltage' },
      { value: '<5 s', label: 'To under 60 V' },
      { value: '60 s', label: 'Withstand at full voltage' },
    ],
    images: [],
    skills: ['KiCad', 'Power Electronics', 'Thermal Analysis', 'High-Voltage Layout', 'Component Sourcing', 'FSAE Rules'],
    sections: [
      {
        heading: 'System Requirements',
        body: 'The board must step 546V down below 60V in under five seconds while withstanding constant tractive-system voltage for 60 seconds without solder reflow — accounting for the inverter’s inherent resistance and capacitance.',
      },
      {
        heading: 'Process',
        body: 'I reviewed the inverter datasheet for key parameters, calculated total discharge resistance, and sourced components rated for both the power and thermal load. I laid the board out in KiCad with an emphasis on thermal and voltage management — excess copper pour, creepage spacing — then generated and exported the BOM.',
      },
      {
        heading: 'My Contributions',
        body: 'Sole designer, owning the complete development cycle: requirements, calculations, layout, thermal analysis, and component sourcing.',
      },
    ],
  },
  {
    id: 'input-module',
    name: 'Input Module',
    org: 'Adom Industries',
    dates: 'May 2026 – Aug 2026',
    blurb:
      'A distributed sensing rack: embedded boards that identify third-party devices and report them over CAN to a gateway and server.',
    metrics: [
      { value: '2', label: 'Buses bridged (CAN, RS-485)' },
      { value: '3', label: 'Tiers built (board, gateway, server)' },
    ],
    images: [],
    skills: ['Embedded C', 'CAN', 'RS-485', 'Raspberry Pi', 'WebSocket', 'JavaScript', 'Client / Server'],
    sections: [
      {
        heading: 'System Requirements',
        body: 'The system needed to identify attached third-party devices, report their state reliably to a central controller, and drive real-time status indicators across a rack — forming the sensing layer of an inventory-management system.',
      },
      {
        heading: 'Process',
        body: 'I designed the embedded boards that communicate with the third-party devices over RS-485 and pass their state over a shared CAN bus to a Raspberry Pi acting as gateway. I architected and built both client and server for the data pipeline: the Pi relays messages over WebSocket to a server that cross-references them against a database to infer the contents of each slot.',
      },
      {
        heading: 'My Contributions',
        body: 'I built all three tiers — board design and firmware, the gateway client, and the server — and designed the primary rack the boards mount into. Real-time status indicators are driven from an LED-state array the server returns, so the rack reflects inventory as it changes.',
      },
    ],
  },
  {
    id: 'cross-medium-learning',
    name: 'Cross-Medium Learning',
    org: 'Robot Interactive Intelligence Lab · UT Austin',
    dates: 'Nov 2025 – Present',
    blurb:
      'Teleoperated demonstration data for a behavioral-cloning policy that performs pick-and-place across varied physical media.',
    metrics: [
      { value: '300+', label: 'Demonstrations collected' },
      { value: '7', label: 'Arm degrees of freedom' },
    ],
    images: [],
    skills: ['Python', 'Imitation Learning', 'Behavioral Cloning', 'Teleoperation', 'Franka Emika', 'Data Curation', 'Policy Rollouts'],
    sections: [
      {
        heading: 'System Requirements',
        body: 'The policy needed to generalize pick-and-place behavior across physical media with meaningfully different dynamics, which demanded a large, consistent, high-quality demonstration set rather than raw volume.',
      },
      {
        heading: 'Process',
        body: 'I teleoperated a Franka Emika arm to collect 300+ demonstrations spanning the target media. I then curated the dataset — assessing each run and pruning suboptimal trajectories so only high-quality imitation data reached training — and ran policy rollouts to evaluate model performance against the collected behavior.',
      },
      {
        heading: 'My Contributions',
        body: 'I handle data collection, dataset curation, and evaluation: capturing demonstrations, deciding what quality bar keeps a trajectory in the set, and running rollouts to measure how the trained policy actually performs.',
      },
    ],
  },
  {
    id: 'frc-8576',
    name: 'Competition Robot Electronics',
    org: 'FIRST Robotics Competition · Team 8576',
    dates: 'Aug 2021 – May 2025',
    blurb:
      'Four seasons of competition robot electronics — control system design and integration, plus a signal-integrity study of CAN bus topology.',
    metrics: [
      { value: '2023', label: 'FIT State champions' },
      { value: '2×', label: 'Worlds qualifications' },
      { value: '3×', label: 'Creativity awards' },
      { value: '4', label: 'Season robots wired' },
    ],
    images: [
      { src: asset('IMG_0840.JPG'), alt: 'Goldfish, the senior-year competition robot' },
      { src: asset('24kpic.png'), alt: '24K, the junior-year competition robot' },
      { src: asset('goldrushpic.png'), alt: 'Gold Rush, the sophomore-year competition robot' },
      { src: asset('pyritepic.png'), alt: 'Pyrite, the rookie-year competition robot' },
    ],
    skills: ['Electrical Design', 'Control Systems', 'CAN Bus', 'Signal Integrity', 'Oscilloscope', 'Cable Management', 'Prototyping', 'Mentorship'],
    sections: [
      {
        heading: 'The Robots',
        body: 'I did electronics across all four of my seasons on Team 8576 — Pyrite as a rookie, then Gold Rush, 24K, and Goldfish — and led control system design and integration for the 2023 and 2024 robots. I worked with the mechanical and programming subsystems to define wire paths, organize cable management, and route around moving parts, iterating the design as mechanical requirements changed. Prioritizing maintainability and robustness over cleverness led to little-to-no workmanship errors across competition seasons.',
      },
      {
        heading: 'Star Topology Validation',
        body: 'In my senior year I ran a project to quantitatively determine whether a star topology was viable for the robot’s CAN bus. I built a test setup and collected motor-controller oscilloscope readings across varied stub lengths and counts, analyzing signal reflections and overall signal integrity to judge where the topology held up and where it degraded.',
      },
      {
        heading: 'Recognition',
        body: 'Selected as one of two team members named a FIRST Dean’s List Semifinalist (2024). The team won the FIRST in Texas State Championship in 2023, qualified for the World Championship twice, won the Creativity Award three times, and qualified for State four times in 2022. I returned as a youth mentor in 2025 to carry the electrical knowledge forward to newer members.',
      },
    ],
  },
]
