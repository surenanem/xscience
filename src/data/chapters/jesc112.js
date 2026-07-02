// NCERT Class 10 Science — Chapter 12: Magnetic Effects of Electric Current
export default {
  id: 'jesc112',
  number: 12,
  subject: 'Physics',
  title: 'Magnetic Effects of Electric Current',
  notes: {
    intro:
      'An electric current flowing through a conductor produces a magnetic field around it — this is called the magnetic effect of electric current, first discovered by Hans Christian Oersted. Conversely, a changing magnetic field can produce an electric current, a phenomenon called electromagnetic induction. These two linked effects explain the working of devices such as electromagnets, electric motors, electric generators and domestic electric circuits.',
    sections: [
      {
        heading: 'Magnetic Field and Field Lines',
        points: [
          'A compass needle is a small bar magnet; the end pointing north is its north pole and the end pointing south is its south pole. Like poles repel, unlike poles attract.',
          'The region surrounding a magnet (or a current-carrying conductor) in which its force can be detected is called a magnetic field. It is a quantity with both magnitude and direction.',
          'Magnetic field lines are imaginary lines used to represent a magnetic field; a field line is the path a hypothetical free north pole would take if placed in the field.',
          'Outside a magnet, field lines emerge from the north pole and merge at the south pole; inside the magnet, they run from the south pole to the north pole, making field lines closed curves.',
          'Field lines are crowded where the magnetic field is strong and spread apart where it is weak; the field is uniform where the lines are evenly spaced and parallel.',
          'No two magnetic field lines can ever cross each other — if they did, the compass needle at that point would have to point in two directions at once, which is impossible.',
        ],
      },
      {
        heading: 'Magnetic Field due to a Current-Carrying Straight Conductor',
        points: [
          'A compass needle placed near a current-carrying wire gets deflected, showing that the current produces a magnetic field around the conductor (Oersted\'s discovery).',
          'The magnetic field lines around a straight current-carrying conductor form concentric circles centred on the wire, lying in a plane perpendicular to it.',
          'The strength of the magnetic field at a point increases as the current in the wire increases, and decreases as the distance from the wire increases (the concentric circles get larger and weaker farther from the wire).',
          'Reversing the direction of current in the wire reverses the direction of the magnetic field lines.',
          'The Right-Hand Thumb Rule gives the field direction: if a current-carrying straight conductor is held in the right hand with the thumb pointing in the direction of current flow, the curled fingers show the direction of the magnetic field lines.',
        ],
      },
      {
        heading: 'Magnetic Field due to a Circular Loop and a Solenoid',
        points: [
          'At every point on a current-carrying circular loop, the magnetic field forms concentric circles that become larger as one moves away from the wire; near the centre of the loop, the field lines appear nearly straight.',
          'Every section of the circular loop contributes to the magnetic field in the same direction inside the loop, so the field there is comparatively strong; for a coil of n turns, the field is n times that of a single turn.',
          'A solenoid is a coil of many circular turns of insulated copper wire wound closely in the shape of a cylinder.',
          'The pattern of field lines around a current-carrying solenoid closely resembles that of a bar magnet — one end behaves as a north pole and the other as a south pole.',
          'The magnetic field inside a long current-carrying solenoid is uniform (the same in magnitude and direction) at all points, shown by evenly spaced parallel field lines.',
          'A piece of soft iron placed inside a current-carrying solenoid gets magnetised strongly as long as the current flows; this device is called an electromagnet.',
        ],
      },
      {
        heading: "Force on a Current-Carrying Conductor and the Electric Motor",
        points: [
          'A current-carrying conductor placed in a magnetic field experiences a force, provided the current is not parallel to the field; this is the motor effect.',
          'The direction of the force reverses if either the direction of the current or the direction of the magnetic field is reversed. The force is maximum when the current and field are perpendicular to each other.',
          "Fleming's Left-Hand Rule gives the direction of this force: stretch the thumb, forefinger and middle finger of the left hand mutually perpendicular; the forefinger points along the magnetic field, the middle finger along the current, and the thumb then points along the direction of the force (motion) on the conductor.",
          'An electric motor converts electrical energy into mechanical energy; it uses a rectangular coil placed between the poles of a magnet, carrying current from a battery through a split-ring commutator.',
          'The forces on the two arms of the coil (carrying current in opposite directions) are equal, opposite and act on different lines, so they form a couple that rotates the coil continuously.',
          'The split-ring commutator reverses the direction of current in the coil every half rotation, which keeps the torque acting in the same rotational sense so the coil keeps spinning in one direction.',
        ],
      },
      {
        heading: 'Electromagnetic Induction and the Electric Generator',
        points: [
          'Electromagnetic induction is the production of an induced electric current in a conductor due to a changing magnetic field around it, or when the conductor moves through a magnetic field.',
          "Fleming's Right-Hand Rule gives the direction of induced current: stretch the thumb, forefinger and middle finger of the right hand mutually perpendicular; the forefinger points along the field, the thumb along the direction of motion of the conductor, and the middle finger then gives the direction of the induced current.",
          'An electric generator converts mechanical energy (used to rotate a coil in a magnetic field) into electrical energy, based on electromagnetic induction.',
          'As the coil of a generator is rotated, the direction of induced current in it changes after every half revolution because the sides of the coil alternately cut the field lines in opposite senses.',
          'An AC generator uses two slip rings that rotate with the coil, allowing the current direction in the external circuit to reverse periodically, producing alternating current (AC). In India, AC changes direction 100 times per second, i.e. a frequency of 50 Hz.',
          'A DC generator uses a split-ring commutator instead of slip rings; this reverses the connections to the external circuit every half revolution so that the current in the external circuit always flows in the same direction (direct current, though pulsating).',
        ],
      },
      {
        heading: 'Domestic Electric Circuits',
        points: [
          'Household electric supply consists of three wires: the live wire (red insulation, high potential), the neutral wire (black insulation, at earth potential), and the earth wire (green insulation, connected to a metal plate buried in the earth).',
          'In India, the potential difference between the live and neutral wires is 220 V, supplied as alternating current at 50 Hz.',
          'Appliances are connected in parallel across the live and neutral wires so that each gets the same voltage, and each can be switched on/off independently without affecting others.',
          'A short circuit occurs when the live and neutral wires touch directly (due to damaged insulation or a fault), causing the current in the circuit to increase abruptly to a very high value.',
          'Overloading occurs when too many high-power appliances are run on the same circuit/socket, or due to a sudden rise in supply voltage, causing an excessively high current to flow.',
          'An electric fuse is a safety device with a wire of low melting point that melts (due to Joule heating) and breaks the circuit when current exceeds a safe limit, protecting appliances and wiring from short-circuit or overload damage. The earth wire connects the metal casing of appliances to the earth, providing a low-resistance path so that any current leakage passes safely to the ground instead of giving the user an electric shock.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Magnetic field', definition: 'The region around a magnet or current-carrying conductor in which its magnetic force can be detected.' },
      { term: 'Magnetic field lines', definition: 'Imaginary closed curves representing the direction and relative strength of a magnetic field, running from the north pole to the south pole outside a magnet.' },
      { term: 'Right-hand thumb rule', definition: 'If a current-carrying straight conductor is held in the right hand with the thumb pointing along the current, the curled fingers give the direction of the surrounding magnetic field.' },
      { term: 'Solenoid', definition: 'A coil of many closely wound circular turns of insulated wire that produces a magnetic field like a bar magnet when carrying current.' },
      { term: 'Electromagnet', definition: 'A temporary magnet formed by a soft iron core placed inside a current-carrying solenoid, magnetised only while current flows.' },
      { term: "Fleming's left-hand rule", definition: 'A rule using the thumb, forefinger and middle finger of the left hand (force, field, current) to find the direction of the force on a current-carrying conductor in a magnetic field.' },
      { term: 'Electric motor', definition: 'A device that converts electrical energy into mechanical energy using the force experienced by a current-carrying coil in a magnetic field.' },
      { term: 'Split-ring commutator', definition: 'A device that reverses the direction of current flow in a coil every half rotation, used in DC motors and DC generators.' },
      { term: 'Electromagnetic induction', definition: 'The phenomenon of generating an induced current in a conductor due to a changing magnetic field or relative motion between the conductor and the field.' },
      { term: "Fleming's right-hand rule", definition: 'A rule using the thumb, forefinger and middle finger of the right hand (motion, field, current) to find the direction of induced current in a conductor moving through a magnetic field.' },
      { term: 'Electric generator', definition: 'A device that converts mechanical energy into electrical energy based on the principle of electromagnetic induction.' },
      { term: 'Short circuit', definition: 'A fault in which the live and neutral wires touch directly, causing current to rise abruptly to a very high, dangerous value.' },
    ],
  },
  quiz: [
    {
      question: 'Which of the following statements about magnetic field lines is INCORRECT?',
      options: [
        'They emerge from the north pole and merge at the south pole outside the magnet',
        'Two magnetic field lines never intersect each other',
        'Field lines are farther apart where the magnetic field is stronger',
        'Inside the magnet, field lines run from the south pole to the north pole',
      ],
      correctIndex: 2,
      explanations: [
        'This statement is true, so it is not the answer — by convention, magnetic field lines outside a magnet emerge from the north pole and merge into the south pole.',
        'This statement is true, so it is not the answer — if two field lines crossed, the compass needle at that point would have to point in two directions at once, which is impossible.',
        'Correct — this statement is false, making it the answer. Field lines are actually crowded closer together where the field is stronger and spread farther apart where it is weaker, not the other way round.',
        'This statement is true, so it is not the answer — inside a magnet the field lines travel from the south pole to the north pole, which is what makes the overall field lines closed curves.',
      ],
    },
    {
      question: 'A long straight wire carries current vertically upward. Using the right-hand thumb rule, the magnetic field lines around it, viewed from directly above, are:',
      options: [
        'Circles going clockwise around the wire',
        'Circles going anticlockwise around the wire',
        'Straight lines radiating outward from the wire',
        'Straight lines running parallel to the wire',
      ],
      correctIndex: 1,
      explanations: [
        "Incorrect — if you grip the wire with your right thumb pointing upward (towards you, when viewed from above), your curled fingers wrap anticlockwise as seen from that viewpoint, not clockwise.",
        "Correct! By the right-hand thumb rule, pointing the thumb in the direction of current (upward, towards an observer looking down from above) makes the curled fingers trace circles that appear anticlockwise from that observer's viewpoint.",
        'Incorrect — the magnetic field around a straight current-carrying wire always forms closed concentric circles centred on the wire, not radial straight lines.',
        'Incorrect — the field lines are circles lying in a plane perpendicular to the wire, not lines running parallel to it.',
      ],
    },
    {
      question: 'The magnetic field inside a long, current-carrying solenoid is:',
      options: [
        'Zero everywhere inside it',
        'Strongest near the ends and weakest at the centre',
        'The same in magnitude and direction at every point inside it',
        'Radial, pointing outward from the axis towards the walls of the solenoid',
      ],
      correctIndex: 2,
      explanations: [
        'Incorrect — the field inside a solenoid is not zero; it is actually strong and reasonably uniform, which is precisely why solenoids are used to magnetise materials placed inside them.',
        'Incorrect — this describes the opposite of what happens; the field is essentially uniform along most of the length inside a long solenoid, only tapering off near the very ends.',
        'Correct! Inside a long current-carrying solenoid, the field lines run as evenly spaced parallel straight lines, showing that the magnetic field has the same magnitude and direction at every interior point — the field is uniform.',
        'Incorrect — the field lines inside a solenoid run parallel to its axis, not radially outward towards the walls; a radial pattern is not observed here.',
      ],
    },
    {
      question: 'A circular loop of wire lies flat on a table, and current flows around it in a clockwise direction when viewed from above. What is the direction of the magnetic field at the centre of the loop?',
      options: [
        'Vertically upward, out of the table',
        'Vertically downward, into the table',
        'Horizontal, pointing radially outward from the centre',
        'There is no magnetic field at the centre of a circular loop',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — curling the right-hand fingers in the clockwise direction of the current (as seen from above) makes the thumb point downward into the table, not upward.',
        "Correct! Applying the right-hand rule, curl the fingers of the right hand in the direction of the current (clockwise as viewed from above); the thumb then points vertically downward into the table, which is the direction of the magnetic field at the centre of the loop.",
        'Incorrect — the field at the centre of a current-carrying circular loop is perpendicular to the plane of the loop (vertical here), not directed radially outward within the plane of the table.',
        'Incorrect — a current-carrying loop does produce a magnetic field at its centre; in fact, the contributions from every part of the loop add up in the same direction there, making the field comparatively strong.',
      ],
    },
    {
      question: "A straight current-carrying conductor lies in the plane of this page with current flowing from left to right, while a magnetic field points into the page. Using Fleming's left-hand rule, the force on the conductor acts:",
      options: [
        'Upward, in the plane of the page',
        'Downward, in the plane of the page',
        'Out of the page, towards the reader',
        'Into the page, away from the reader',
      ],
      correctIndex: 0,
      explanations: [
        "Correct! By Fleming's left-hand rule, point the forefinger into the page (direction of field) and the middle finger to the right (direction of current); with the three fingers held mutually perpendicular, the thumb points upward in the plane of the page — that is the direction of the force.",
        "Incorrect — with the forefinger set into the page and the middle finger to the right, the thumb of the left hand points upward, not downward, in the plane of the page.",
        "Incorrect — the force on a current-carrying conductor in a magnetic field lies in the plane perpendicular to both the current and the field; since both the current (left-right) and field (into page) lie such that their perpendicular is in the plane of the page, the force cannot point out of the page.",
        "Incorrect — similarly, the force cannot point into the page here; Fleming's left-hand rule places it in the plane of the page, specifically upward.",
      ],
    },
    {
      question: 'In a simple DC electric motor, what is the function of the split-ring commutator?',
      options: [
        'It increases the strength of the permanent magnet used in the motor',
        'It reverses the direction of current in the coil every half rotation, keeping the torque acting in the same rotational sense',
        'It converts the AC supply into a magnetic field before it reaches the coil',
        'It measures the speed of rotation of the coil',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — the commutator is an electrical switching device made of split metal rings; it has no effect on the strength of the permanent magnet used to create the field.',
        'Correct! As the coil rotates past the vertical, the split-ring commutator swaps its contact with the battery terminals, reversing the current direction in the coil every half rotation. This keeps the force on each arm acting in a consistent rotational sense, so the coil continues to spin the same way instead of oscillating back and forth.',
        'Incorrect — a simple DC motor is typically run from a DC battery, not an AC supply, and the commutator does not perform any AC-to-field conversion; its role is purely to reverse current direction in the coil.',
        'Incorrect — the commutator plays no role in measuring speed; it is purely a current-reversing switch, not a sensor.',
      ],
    },
    {
      question: "Fleming's right-hand rule is used to find the direction of induced current in a conductor moving through a magnetic field. In this rule, what does the middle finger represent?",
      options: [
        'The direction of the magnetic field',
        'The direction of motion of the conductor',
        'The direction of the induced current',
        'The direction of the force experienced by the conductor',
      ],
      correctIndex: 2,
      explanations: [
        "Incorrect — in Fleming's right-hand rule, the direction of the magnetic field is represented by the forefinger (first finger), not the middle finger.",
        "Incorrect — the direction of motion of the conductor is represented by the thumb in Fleming's right-hand rule, not the middle finger.",
        "Correct! In Fleming's right-hand rule (used for electromagnetic induction), if the forefinger points along the field and the thumb points along the direction of motion of the conductor, the middle finger gives the direction of the induced current.",
        "Incorrect — this rule is used to find induced current, not an external force on the conductor; the 'force' role is instead played by the thumb (motion) in this particular right-hand version used for generators.",
      ],
    },
    {
      question: 'What is the key structural difference between an AC generator and a DC generator?',
      options: [
        'An AC generator uses a permanent magnet, while a DC generator uses an electromagnet',
        'An AC generator uses two slip rings, while a DC generator uses a split-ring commutator',
        'An AC generator has a stationary coil, while a DC generator has a rotating coil',
        'An AC generator does not require any coil, while a DC generator does',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — both AC and DC generators can be built with either a permanent magnet or an electromagnet providing the field; this is not the defining structural difference between them.',
        'Correct! In an AC generator, the rotating coil is connected to the external circuit through two slip rings, which lets the current in the circuit reverse direction periodically, giving alternating current. In a DC generator, a split-ring commutator is used instead, which reverses the coil connections every half turn so the current in the external circuit always flows in one direction.',
        'Incorrect — in both types of generators, it is the coil that is rotated within the magnetic field (or the field that is rotated around a stationary coil in some designs); this is not what distinguishes AC from DC generators.',
        'Incorrect — both AC and DC generators fundamentally rely on a coil being rotated in a magnetic field to induce a current via electromagnetic induction; neither works without a coil.',
      ],
    },
    {
      question: 'A short circuit in a domestic electric circuit typically occurs when:',
      options: [
        'The earth wire gets disconnected from the metal plate buried in the ground',
        'The live wire and the neutral wire come into direct contact due to damaged insulation, causing current to increase abruptly',
        'Too many appliances of low power rating are connected to a single 15 A socket',
        'The fuse wire melts and breaks the circuit as intended',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — a disconnected earth wire is a serious safety hazard (it removes protection against electric shock), but it does not by itself cause a short circuit; the earth wire is not part of the live-neutral current path.',
        'Correct! A short circuit happens when the live and neutral wires touch directly, usually because of damaged insulation or a fault in an appliance. Since this bypasses the normal resistance of the circuit, the current rises abruptly and heavily, which can cause sparking, overheating and fire if not interrupted by a fuse.',
        'Incorrect — connecting too many appliances to one socket describes overloading, not a short circuit; overloading raises the current gradually as more appliances add their currents, rather than the live and neutral wires touching directly.',
        'Incorrect — a fuse melting to break the circuit is the fuse doing its intended safety job in response to excess current; it is the protective outcome, not the cause, of a short circuit.',
      ],
    },
    {
      question: 'Why is the metallic body of an appliance such as an electric iron connected to the earth wire?',
      options: [
        'To increase the potential difference across the appliance so it works faster',
        'To provide a low-resistance path so that any current leakage to the metal body flows safely to the ground, keeping the user from receiving a severe shock',
        'To store excess electric charge inside the appliance for later use',
        'To reduce the amount of current the appliance draws from the live wire',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — earthing does not alter the potential difference supplied to the appliance or affect how fast it works; its purpose is purely a safety measure.',
        "Correct! The earth wire connects the metal casing of an appliance to a metal plate buried in the ground. If the live wire accidentally touches the metal body (due to a fault), the earth wire offers a low-resistance path so that the leakage current flows safely into the ground, keeping the body's potential close to that of the earth and protecting the user from a severe electric shock.",
        'Incorrect — the earth wire does not store charge; it simply provides a safe path to the ground for any accidental leakage current.',
        'Incorrect — earthing does not change the normal operating current drawn by the appliance during ordinary use; it only becomes active in providing a path for fault/leakage current.',
      ],
    },
  ],
}
