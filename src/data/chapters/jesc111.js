// NCERT Class 10 Science — Chapter 11: Electricity
export default {
  id: 'jesc111',
  number: 11,
  subject: 'Physics',
  title: 'Electricity',
  notes: {
    intro:
      'Electricity is a controllable and convenient form of energy used in homes, schools, hospitals and industries. This chapter explains what constitutes an electric current, how it flows through a circuit, the factors that control it, and the heating and power effects associated with it.',
    sections: [
      {
        heading: 'Electric Current and Circuit',
        points: [
          'A flow of electric charge through a conductor constitutes an electric current. Conventionally, the direction of current is taken as the direction of flow of positive charge, which is opposite to the actual direction of flow of electrons.',
          'Electric current I is the rate of flow of charge: I = Q/t, where Q is the charge (in coulombs) flowing across a cross-section in time t (in seconds).',
          'The SI unit of charge is the coulomb (C), equal to the charge on about 6 × 10^18 electrons. The SI unit of current is the ampere (A); 1 A = 1 C/s.',
          'An ammeter measures current and is always connected in series in the circuit through which the current is to be measured.',
          'A continuous and closed path through which current flows is called an electric circuit. A plug key or switch is used to make or break this path.',
          'Circuit diagrams use standard symbols for components such as cells, batteries, plug keys (open/closed), resistors, rheostats, ammeters, voltmeters and bulbs.',
        ],
      },
      {
        heading: 'Potential Difference and Ohm\'s Law',
        points: [
          'Charges flow through a conductor only when there is a potential difference between two points, much as water flows only when there is a pressure difference. A cell or battery maintains this potential difference using stored chemical energy.',
          'Potential difference V between two points is the work done W to move a unit charge Q from one point to the other: V = W/Q. Its SI unit is the volt (V); 1 V = 1 J/C.',
          'A voltmeter measures potential difference and is always connected in parallel across the component being measured.',
          'Ohm\'s law: at constant temperature, the potential difference V across a metallic conductor is directly proportional to the current I flowing through it, so V = IR, where R is the resistance of the conductor.',
          'Resistance R = V/I; its SI unit is the ohm (Ω), where 1 Ω = 1 V/1 A. Resistance is the property of a conductor that opposes (resists) the flow of current through it.',
          'A graph of V versus I for a metallic conductor at constant temperature is a straight line passing through the origin, confirming Ohm\'s law.',
        ],
      },
      {
        heading: 'Resistance: Factors and Resistivity',
        points: [
          'The resistance of a conductor depends on its length (l), its area of cross-section (A), and the nature (material) of the conductor.',
          'Resistance is directly proportional to length (R ∝ l) and inversely proportional to area of cross-section (R ∝ 1/A). Combining these gives R = ρl/A, where ρ (rho) is the electrical resistivity of the material.',
          'Resistivity is a characteristic property of the material (independent of its length or area) and has SI unit ohm-metre (Ω m). Both resistance and resistivity of metals increase with a rise in temperature.',
          'Metals and alloys have very low resistivity (about 10^-8 to 10^-6 Ω m) and are good conductors; insulators such as rubber and glass have very high resistivity (about 10^12 to 10^17 Ω m).',
          'Alloys such as nichrome have higher resistivity than their constituent metals and do not oxidise readily at high temperatures, so they are used in heating devices like electric irons and toasters.',
          'Tungsten, with its very high melting point, is used for bulb filaments, while copper and aluminium, having low resistivity, are used for electricity transmission wires.',
        ],
      },
      {
        heading: 'Resistors in Series and Parallel',
        points: [
          'In a series combination, resistors are joined end to end so that the same current flows through each resistor, but the total potential difference is shared: V = V1 + V2 + V3.',
          'The equivalent resistance of resistors in series is the sum of their individual resistances: Rs = R1 + R2 + R3, which is always greater than the largest individual resistance.',
          'In a parallel combination, resistors are connected between the same two points so that the potential difference across each resistor is the same, but the total current is shared: I = I1 + I2 + I3.',
          'The reciprocal of the equivalent resistance of resistors in parallel equals the sum of the reciprocals of the individual resistances: 1/Rp = 1/R1 + 1/R2 + 1/R3. Rp is always smaller than the smallest individual resistance.',
          'A parallel arrangement is used in domestic wiring because each appliance gets the full source voltage, can be switched on or off independently, and draws only the current it needs.',
        ],
      },
      {
        heading: 'Heating Effect of Electric Current (Joule\'s Law)',
        points: [
          'When current flows through a purely resistive circuit, all the electrical energy supplied by the source is dissipated as heat. This is called the heating effect of electric current.',
          'The heat produced is H = VIt (from the work done in moving charge through a potential difference), which on applying Ohm\'s law (V = IR) becomes Joule\'s law of heating: H = I^2Rt.',
          'Joule\'s law shows that heat produced is directly proportional to the square of the current, directly proportional to resistance, and directly proportional to the time for which current flows.',
          'Practical applications include electric heaters, irons, toasters and kettles, and the tungsten filament of an electric bulb, which glows because it retains heat and reaches a very high temperature.',
          'A fuse, connected in series with a circuit, is a safety device made of a wire with an appropriate melting point; it melts and breaks the circuit when current exceeds a safe rated value, protecting appliances from damage.',
        ],
      },
      {
        heading: 'Electric Power and Energy Consumption',
        points: [
          'Electric power is the rate at which electrical energy is consumed or dissipated: P = VI. Using Ohm\'s law, this can also be written as P = I^2R = V^2/R.',
          'The SI unit of electric power is the watt (W); 1 W = 1 volt × 1 ampere. A larger practical unit is the kilowatt (kW), equal to 1000 W.',
          'Electrical energy consumed equals power multiplied by time: Energy = P × t. When power is in watts and time in hours, energy is measured in watt-hours (Wh).',
          'The commercial unit of electrical energy, commonly called a "unit," is the kilowatt-hour (kWh): 1 kWh is the energy used by a 1 kW appliance operated for 1 hour, and 1 kWh = 3.6 × 10^6 J.',
          'Electricity bills are calculated based on the number of units (kWh) of energy consumed by all appliances in a given period.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Electric current', definition: 'The rate of flow of electric charge through a conductor, measured in amperes.' },
      { term: 'Ampere', definition: 'The SI unit of electric current; a current of 1 A means 1 coulomb of charge flows per second.' },
      { term: 'Potential difference', definition: 'The work done per unit charge to move a charge between two points in a circuit, measured in volts.' },
      { term: 'Ohm\'s law', definition: 'The law stating that at constant temperature, the potential difference across a conductor is directly proportional to the current through it (V = IR).' },
      { term: 'Resistance', definition: 'The property of a conductor that opposes the flow of electric current through it, measured in ohms (Ω).' },
      { term: 'Resistivity', definition: 'A characteristic property of a material equal to the resistance of a unit length and unit cross-sectional area of it, measured in ohm-metre.' },
      { term: 'Rheostat', definition: 'A variable resistance device used to regulate current in a circuit without changing the voltage source.' },
      { term: 'Series combination', definition: 'An arrangement of resistors joined end to end so that the same current flows through each of them.' },
      { term: 'Parallel combination', definition: 'An arrangement of resistors connected between the same two points so that the potential difference across each of them is the same.' },
      { term: 'Joule\'s law of heating', definition: 'The law stating that heat produced in a resistor is H = I^2Rt, proportional to the square of the current, the resistance, and the time.' },
      { term: 'Electric power', definition: 'The rate at which electrical energy is consumed or dissipated in a circuit, given by P = VI and measured in watts.' },
      { term: 'Kilowatt-hour (kWh)', definition: 'The commercial unit of electrical energy, equal to the energy consumed by a 1 kW appliance run for 1 hour (3.6 × 10^6 J).' },
    ],
  },
  quiz: [
    {
      question: 'Which equation correctly represents Ohm\'s law for a metallic conductor at constant temperature?',
      options: ['V = I/R', 'V = IR', 'I = VR', 'R = VI'],
      correctIndex: 1,
      explanations: [
        'Incorrect — this would mean potential difference decreases as resistance increases for a fixed current, which is the opposite of the actual relationship. Ohm\'s law states V is directly proportional to I, giving V = IR, not V = I/R.',
        'Correct! Ohm\'s law states that at constant temperature, the potential difference V across a conductor is directly proportional to the current I through it, with resistance R as the constant of proportionality: V = IR.',
        'Incorrect — this is dimensionally and algebraically wrong; rearranging V = IR for current correctly gives I = V/R, not I = VR.',
        'Incorrect — rearranging V = IR for resistance correctly gives R = V/I, not R = VI. Multiplying V and I instead gives power, not resistance.',
      ],
    },
    {
      question: 'Two nichrome wires, A and B, are made of the same material and have equal length, but wire A has twice the cross-sectional area of wire B. How do their resistances compare?',
      options: ['Resistance of A is twice that of B', 'Resistance of A is half that of B', 'Resistance of A is four times that of B', 'Resistance of A equals resistance of B since they are the same material and length'],
      correctIndex: 1,
      explanations: [
        'Incorrect — resistance is inversely proportional to cross-sectional area (R ∝ 1/A), so a larger area gives a smaller resistance, not a larger one.',
        'Correct! Since R = ρl/A, and A has the same length and material as B but twice the area, R_A = ρl/(2A_B) = R_B/2. A thicker wire of the same material and length has lower resistance.',
        'Incorrect — resistance varies inversely with area itself, not with the square of area; doubling the area halves the resistance rather than changing it by a factor of four.',
        'Incorrect — although the material and length are the same, resistance also depends on the area of cross-section, which differs here, so the resistances cannot be equal.',
      ],
    },
    {
      question: 'Which pair of materials both have resistivity values typical of good conductors (roughly 10^-8 to 10^-6 Ω m)?',
      options: ['Copper and silver', 'Glass and rubber', 'Copper and glass', 'Nichrome and diamond'],
      correctIndex: 0,
      explanations: [
        'Correct! Copper (about 1.6 × 10^-8 Ω m) and silver (about 1.6 × 10^-8 Ω m) are both metals with very low resistivity, making them excellent conductors of electricity.',
        'Incorrect — glass and rubber are insulators with extremely high resistivity (around 10^10 to 10^16 Ω m), the opposite of good conductors.',
        'Incorrect — while copper is a good conductor, glass is an insulator with resistivity many orders of magnitude higher, so this pair does not both fall in the good-conductor range.',
        'Incorrect — nichrome is an alloy with much higher resistivity (about 10^-4 Ω m) than typical metals, and diamond is an insulator; neither falls in the very-low-resistivity range of good conductors like copper or silver.',
      ],
    },
    {
      question: 'Three resistors of 2 Ω, 3 Ω and 5 Ω are connected in series across a battery. What is their equivalent resistance?',
      options: ['10 Ω', 'Approximately 0.97 Ω', 'Approximately 1.03 Ω', '15 Ω'],
      correctIndex: 0,
      explanations: [
        'Correct! For resistors in series, the equivalent resistance is the simple sum of the individual resistances: Rs = R1 + R2 + R3 = 2 Ω + 3 Ω + 5 Ω = 10 Ω.',
        'Incorrect — this value comes from incorrectly applying the parallel-combination reciprocal formula (1/Rp = 1/2 + 1/3 + 1/5) to a series circuit; series resistances simply add up rather than combining by reciprocals.',
        'Incorrect — this is not the correct value for either a series or parallel combination of these three resistors, and series resistances are found by direct addition, not this calculation.',
        'Incorrect — this incorrectly multiplies or overestimates the sum; adding 2 + 3 + 5 gives 10 Ω, not 15 Ω.',
      ],
    },
    {
      question: 'Two resistors of 4 Ω and 12 Ω are connected in parallel. What is their equivalent resistance?',
      options: ['16 Ω', '8 Ω', '3 Ω', 'One-third of an ohm'],
      correctIndex: 2,
      explanations: [
        'Incorrect — this is the sum of the two resistances (4 Ω + 12 Ω), which is how you would combine resistors in series, not in parallel.',
        'Incorrect — this is not obtained from the correct parallel-resistance formula; simply averaging or halving the sum does not give the equivalent parallel resistance.',
        'Correct! For parallel resistors, 1/Rp = 1/R1 + 1/R2 = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3, so Rp = 3 Ω. Note that this is smaller than either individual resistance, as expected for a parallel combination.',
        'Incorrect — 1/3 is the value of 1/Rp (in units of 1/Ω), not Rp itself. Taking the reciprocal of 1/3 gives the correct equivalent resistance of 3 Ω.',
      ],
    },
    {
      question: 'In a series circuit made of three different resistors connected to a battery, which quantity is the same through each resistor even though the potential difference across each may differ?',
      options: ['The current', 'The voltage', 'The power dissipated', 'The resistance'],
      correctIndex: 0,
      explanations: [
        'Correct! In a series circuit, there is only one path for charge to flow, so the same current passes through every resistor, regardless of their individual resistance values. Only the potential difference across each resistor differs, in proportion to its resistance.',
        'Incorrect — the voltage (potential difference) is generally different across each resistor in series; only the total voltage across the whole series combination equals the sum of the individual voltage drops.',
        'Incorrect — power dissipated in each resistor is P = I^2R, so it differs between resistors of different resistance values even though the current is the same.',
        'Incorrect — the question specifies the resistors have different values, so resistance is by definition not the same across each of them; it is current that stays the same.',
      ],
    },
    {
      question: 'According to Joule\'s law of heating, H = I^2Rt. If the current through a fixed resistor is doubled while the time is kept constant, how does the heat produced change?',
      options: ['It doubles', 'It is halved', 'It becomes four times as much', 'It remains the same'],
      correctIndex: 2,
      explanations: [
        'Incorrect — heat produced depends on the square of the current (I^2), not on current directly, so doubling the current does not simply double the heat produced.',
        'Incorrect — heating increases, not decreases, with current, since H is directly proportional to I^2, so this answer has the direction of change backwards.',
        'Correct! Since H = I^2Rt, heat is directly proportional to the square of the current. Doubling the current (I → 2I) increases (2I)^2 = 4I^2, so the heat produced becomes four times as much, with R and t unchanged.',
        'Incorrect — heat produced depends directly on current squared, so changing the current does change the heat produced; it does not stay constant.',
      ],
    },
    {
      question: 'Which of the following correctly expresses the electric power dissipated in a resistor R carrying current I at potential difference V?',
      options: ['Only P = VI is valid; P ≠ I^2R and P ≠ V^2/R', 'P = V/I', 'P = VI = I^2R = V^2/R (all equivalent forms)', 'P = V + I'],
      correctIndex: 2,
      explanations: [
        'Incorrect — P = VI is valid, but so are the other two forms; using Ohm\'s law (V = IR) to substitute into P = VI gives P = I^2R and P = V^2/R, all describing the same power.',
        'Incorrect — V/I equals the resistance R (from Ohm\'s law, R = V/I), not the power dissipated.',
        'Correct! Power is P = VI. Substituting V = IR gives P = I^2R, and substituting I = V/R gives P = V^2/R. These are three equivalent expressions for the same electric power, useful depending on which quantities are known.',
        'Incorrect — power is not obtained by adding voltage and current; it is their product (or an equivalent form using Ohm\'s law), not their sum, and V + I is not even dimensionally meaningful.',
      ],
    },
    {
      question: 'A 1000 W electric heater is used for 3 hours a day for 10 days. How many "units" of electrical energy does it consume, and what does one unit mean?',
      options: ['30 units; 1 unit = 1 kWh, the energy used by a 1 kW appliance run for 1 hour', '3 units; 1 unit = 1 Wh, the energy used by a 1 W appliance run for 1 hour', '300 units; 1 unit = 1 Wh, the energy used by a 1 W appliance run for 1 hour', '30 units; 1 unit = 1 joule of electrical energy'],
      correctIndex: 0,
      explanations: [
        'Correct! The heater\'s power is 1000 W = 1 kW, used for 3 h/day × 10 days = 30 hours total, so energy consumed = 1 kW × 30 h = 30 kWh. The commercial "unit" of electrical energy is the kilowatt-hour (kWh), defined as the energy used by a 1 kW appliance operating for 1 hour.',
        'Incorrect — the total usage is 1 kW × 30 h = 30 kWh, not 3 units, and the commercial unit of electrical energy is the kilowatt-hour, not the watt-hour.',
        'Incorrect — this incorrectly scales the calculation and misidentifies the unit; the correct energy consumed is 30 kWh, using kilowatt-hour (not watt-hour) as the commercial unit.',
        'Incorrect — although the numeric value of 30 is correct, one "unit" (kWh) is a much larger quantity of energy than one joule; specifically 1 kWh = 3.6 × 10^6 J, not 1 J.',
      ],
    },
    {
      question: 'A fuse wire in a household circuit works on the heating effect of current. Why is it connected in series with the circuit it protects, rather than in parallel?',
      options: [
        'Because being in series ensures the entire circuit current passes through the fuse, so it heats up and melts to break the circuit whenever the current exceeds the safe rated value',
        'Because being in series lets the fuse divert only a small fraction of the current, protecting itself from melting while the rest of the current bypasses it',
        'Because a parallel connection would let the fuse measure the potential difference across the circuit and switch off the supply based on voltage instead of current',
        'Because a series connection increases the total resistance of the circuit enough that the current becomes zero when appliances are switched on',
      ],
      correctIndex: 0,
      explanations: [
        'Correct! A fuse must carry the full current of the circuit it protects, which is only guaranteed in a series connection (all current flows through a single path). If the current exceeds the fuse\'s rated value, Joule heating (H = I^2Rt) raises its temperature enough to melt the fuse wire, breaking the circuit and protecting the appliances.',
        'Incorrect — a fuse in series does not divert or share current with another path; all of the circuit\'s current passes through it, which is exactly why excess current causes it to melt.',
        'Incorrect — a fuse works based on excess current (via heating), not by measuring potential difference like a voltmeter; a parallel connection is how a voltmeter, not a fuse, is connected.',
        'Incorrect — a fuse wire has a very small, deliberately low resistance under normal conditions and does not reduce the working current to zero; it only breaks the circuit when the current becomes dangerously high.',
      ],
    },
  ],
}
