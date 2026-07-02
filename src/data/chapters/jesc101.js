// NCERT Class 10 Science — Chapter 1: Chemical Reactions and Equations
export default {
  id: 'jesc101',
  number: 1,
  subject: 'Chemistry',
  title: 'Chemical Reactions and Equations',
  notes: {
    intro:
      'Whenever a chemical change occurs, a chemical reaction has taken place. A chemical reaction can be identified by a change in state, a change in colour, evolution of a gas, or a change in temperature. Chemical reactions are represented concisely using chemical equations.',
    sections: [
      {
        heading: 'Chemical Equations',
        points: [
          'A word-equation shows reactants (left, joined by +) changing into products (right, joined by +) via an arrow: Reactants → Products.',
          'A chemical equation uses formulae instead of words, e.g. Mg + O2 → MgO.',
          'A skeletal chemical equation is one that is not yet balanced — the number of atoms of each element may differ on the two sides.',
        ],
      },
      {
        heading: 'Balancing Chemical Equations',
        points: [
          'Law of conservation of mass: mass (and hence the number of atoms of each element) can neither be created nor destroyed in a chemical reaction.',
          'A balanced equation has equal numbers of atoms of each element on the reactant (LHS) and product (RHS) sides.',
          'Balancing is done by the hit-and-trial method: adjust whole-number coefficients (never change subscripts/formulae) until every element balances, usually starting with the compound having the most atoms.',
          'Physical states are shown using (s), (l), (g) and (aq); reaction conditions (heat, sunlight, catalyst, pressure) are written above/below the arrow.',
        ],
      },
      {
        heading: 'Types of Chemical Reactions',
        points: [
          'Combination reaction: two or more reactants combine to form a single product. Example: CaO(s) + H2O(l) → Ca(OH)2(aq) + heat.',
          'Decomposition reaction: a single reactant breaks down into two or more simpler products. Thermal (by heat): CaCO3 → CaO + CO2. Photolytic (by light): 2AgCl → 2Ag + Cl2. Electrolytic (by electricity): 2H2O → 2H2 + O2.',
          'Displacement reaction: a more reactive element displaces a less reactive element from its compound. Example: Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s).',
          'Double displacement reaction: two compounds exchange ions, often producing an insoluble precipitate. Example: Na2SO4(aq) + BaCl2(aq) → BaSO4(s) + 2NaCl(aq). Any reaction forming a precipitate is a precipitation reaction.',
          'Oxidation: gain of oxygen or loss of hydrogen. Reduction: loss of oxygen or gain of hydrogen. A reaction where one reactant is oxidised and another is reduced is a redox reaction, e.g. CuO + H2 → Cu + H2O (CuO is reduced, H2 is oxidised).',
        ],
      },
      {
        heading: 'Effects of Oxidation Reactions in Daily Life',
        points: [
          'Corrosion: a metal is attacked/eaten away by substances around it (moisture, acids, gases) — e.g. rusting of iron, tarnishing of silver, green coating on copper.',
          'Rancidity: oxidation of fats and oils in food changes their smell and taste. Prevented by adding antioxidants, storing in airtight containers, or flushing packets with nitrogen gas.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Reactants', definition: 'The starting substances that undergo chemical change in a reaction.' },
      { term: 'Products', definition: 'The new substance(s) formed as a result of a chemical reaction.' },
      { term: 'Balanced chemical equation', definition: 'An equation in which the number of atoms of each element is equal on both sides.' },
      { term: 'Exothermic reaction', definition: 'A reaction in which heat is released along with the products.' },
      { term: 'Endothermic reaction', definition: 'A reaction in which energy (heat, light or electricity) is absorbed.' },
      { term: 'Precipitate', definition: 'An insoluble solid substance formed during a chemical reaction in solution.' },
      { term: 'Corrosion', definition: 'Slow eating away of a metal by reaction with substances in its surroundings such as moisture and acids.' },
      { term: 'Rancidity', definition: 'Spoiling of fats/oils in food due to oxidation, causing a change in smell and taste.' },
    ],
  },
  quiz: [
    {
      question: 'Which of these is NOT generally used as evidence that a chemical reaction has occurred?',
      options: ['Evolution of a gas', 'Change in colour', 'Change in shape of the container', 'Change in temperature'],
      correctIndex: 2,
      explanations: [
        'Incorrect — gas evolution (e.g. bubbles) is a classic sign that a new substance is forming, so this IS valid evidence.',
        'Incorrect — a colour change (e.g. green ferrous sulphate turning brown) indicates a new substance has formed, so this IS valid evidence.',
        'Correct! The shape of the container is a property of the container, not of the substances reacting — it never changes because of a chemical reaction, so it cannot be used as evidence.',
        'Incorrect — a temperature change shows energy is being absorbed or released, which IS valid evidence of a chemical reaction.',
      ],
    },
    {
      question: 'The word-equation "Zinc + Sulphuric acid → Zinc sulphate + Hydrogen" is correctly written in chemical form as:',
      options: ['Zn + H2SO4 → ZnSO4 + H2', 'Zn2 + HSO4 → ZnSO4 + H', 'ZnSO4 + H2 → Zn + H2SO4', 'Zn + SO4 → ZnSO4 + H2'],
      correctIndex: 0,
      explanations: [
        'Correct! This uses the actual formulae of zinc, sulphuric acid, zinc sulphate and hydrogen gas, with reactants correctly on the left and products on the right — and it is already balanced (1 Zn, 2 H, 1 S, 4 O on each side).',
        'Incorrect — the formulae are wrong (Zn2 and HSO4 do not represent zinc metal or sulphuric acid correctly).',
        'Incorrect — this reverses reactants and products; zinc sulphate and hydrogen are the products, not the starting materials in this reaction.',
        'Incorrect — sulphuric acid is H2SO4, not SO4; omitting the hydrogen from the reactant side breaks the law of conservation of mass.',
      ],
    },
    {
      question: 'In the unbalanced equation Fe + H2O → Fe3O4 + H2, what is the correctly balanced form?',
      options: ['Fe + H2O → Fe3O4 + H2', '3Fe + 4H2O → Fe3O4 + 4H2', '3Fe + H2O → Fe3O4 + H2', 'Fe + 4H2O → 3Fe3O4 + 4H2'],
      correctIndex: 1,
      explanations: [
        'Incorrect — as written this is only a skeletal equation: Fe (1 vs 3), H (2 vs 2 — coincidentally equal) and O (1 vs 4) are not balanced overall.',
        'Correct! With coefficients 3, 4, 1, 4: Fe = 3 both sides, H = 8 both sides (4×2 = 4×2), O = 4 both sides (4×1 = 1×4). This is the standard balanced equation for this reaction.',
        'Incorrect — oxygen and hydrogen are still unbalanced (1 O on the left vs 4 on the right; 2 H on the left vs 2 on the right only works after H2O is scaled up).',
        'Incorrect — this introduces an unnecessary coefficient of 3 on Fe3O4, which throws off the iron and oxygen balance (iron would be 1 vs 9, oxygen 4 vs 12).',
      ],
    },
    {
      question: 'CaO(s) + H2O(l) → Ca(OH)2(aq) + heat is an example of which type of reaction?',
      options: ['Decomposition reaction', 'Displacement reaction', 'Combination reaction', 'Double displacement reaction'],
      correctIndex: 2,
      explanations: [
        'Incorrect — decomposition is the opposite: one reactant breaking into multiple products. Here two reactants are joining, not one breaking apart.',
        'Incorrect — a displacement reaction needs an element to replace another element in a compound; here there is no such replacement.',
        'Correct! Two reactants (calcium oxide and water) combine to form a single product (calcium hydroxide), which is the definition of a combination reaction. It also releases heat, making it exothermic.',
        'Incorrect — double displacement involves exchange of ions between two compounds to form two new compounds; only one product is formed here.',
      ],
    },
    {
      question: 'Which of the following best distinguishes a decomposition reaction from a combination reaction?',
      options: [
        'Decomposition always needs sunlight, combination never does',
        'Decomposition breaks one substance into two or more; combination joins two or more substances into one',
        'Decomposition only happens to metals; combination only happens to non-metals',
        'Decomposition releases energy; combination always absorbs energy',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — decomposition can be caused by heat (thermal), light (photolytic), or electricity (electrolytic), not only sunlight; and some combination reactions are also driven by specific conditions.',
        'Correct! Decomposition reactions are the reverse of combination reactions: one reactant splits into two or more simpler products, whereas in combination, two or more reactants unite into a single product.',
        'Incorrect — both types of reactions occur with a wide range of substances, not restricted to metals or non-metals.',
        'Incorrect — decomposition reactions are usually endothermic (they absorb energy to break bonds), and combination reactions are often exothermic (like CaO + H2O), so this statement has it backwards.',
      ],
    },
    {
      question: 'A white precipitate of silver chloride placed in sunlight turns grey. This reaction, 2AgCl(s) → 2Ag(s) + Cl2(g), is:',
      options: ['A combination reaction, because chlorine is released', 'A photolytic decomposition reaction, because light energy breaks it down', 'A displacement reaction, because silver replaces chlorine', 'A double displacement reaction, because ions are exchanged'],
      correctIndex: 1,
      explanations: [
        'Incorrect — a combination reaction forms a single product from multiple reactants; here a single reactant (AgCl) is breaking into two products (Ag and Cl2), which is the opposite.',
        'Correct! One reactant, silver chloride, decomposes into two products, silver metal and chlorine gas, using light energy — this is a photolytic (light-driven) decomposition reaction, the basis of black-and-white photography.',
        'Incorrect — displacement requires one element to replace another element within a compound while reacting with a second compound; here there is only one reactant breaking apart, no replacement between two substances.',
        'Incorrect — double displacement needs two compounds exchanging ions to form two new compounds; here there is only a single reactant.',
      ],
    },
    {
      question: 'When an iron nail is dipped in copper sulphate solution, the blue colour fades and the nail turns brownish because:',
      options: [
        'Copper displaces iron from iron sulphate',
        'Iron displaces copper from copper sulphate, forming iron sulphate and depositing copper',
        'Iron and copper sulphate undergo double displacement, forming a precipitate',
        'The copper sulphate decomposes into copper and sulphur dioxide',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — this reverses the actual reaction; iron is more reactive than copper, so iron displaces copper, not the other way around.',
        'Correct! Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s). Iron, being more reactive, displaces copper from copper sulphate solution. The blue CuSO4 colour fades as pale green FeSO4 forms, and reddish-brown copper metal deposits on the nail.',
        'Incorrect — this is a single displacement (one element replacing another), not an exchange of ions between two compounds, and no precipitate forms here — copper deposits as a metal coating instead.',
        'Incorrect — copper sulphate does not spontaneously decompose here; nothing is being heated, lit, or electrolysed, and the observed products (iron sulphate and copper) match a displacement reaction, not decomposition.',
      ],
    },
    {
      question: 'Mixing sodium sulphate solution with barium chloride solution forms a white insoluble precipitate of barium sulphate and sodium chloride stays dissolved. This reaction is classified as:',
      options: ['A combination and precipitation reaction', 'A double displacement (precipitation) reaction', 'An oxidation-reduction reaction', 'A decomposition reaction'],
      correctIndex: 1,
      explanations: [
        'Incorrect — a combination reaction needs a single product from all reactants; here two separate products (BaSO4 and NaCl) are formed.',
        'Correct! Na2SO4(aq) + BaCl2(aq) → BaSO4(s) + 2NaCl(aq). The sulphate and chloride ions swap partners between the two compounds — this ion exchange makes it a double displacement reaction, and since an insoluble solid (BaSO4) forms, it is also a precipitation reaction.',
        'Incorrect — no element is gaining or losing oxygen/hydrogen here; the ions simply exchange partners without any change in oxidation state, so this is not a redox reaction.',
        'Incorrect — decomposition needs one reactant breaking into multiple products; here two reactants combine and swap ions to give two products.',
      ],
    },
    {
      question: 'In the reaction CuO + H2 → Cu + H2O, which statement correctly identifies oxidation and reduction?',
      options: [
        'CuO is oxidised because it loses oxygen; H2 is reduced because it gains oxygen',
        'CuO is reduced because it loses oxygen; H2 is oxidised because it gains oxygen',
        'Both CuO and H2 are reduced, since Cu and H2O are both stable products',
        'Neither species is oxidised or reduced — this is a simple displacement reaction',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — this has the definitions swapped: losing oxygen is reduction, not oxidation.',
        'Correct! Reduction is loss of oxygen (CuO → Cu loses oxygen, so CuO is reduced) and oxidation is gain of oxygen (H2 → H2O gains oxygen, so H2 is oxidised). Since one species is oxidised while another is reduced in the same reaction, this is a redox reaction.',
        'Incorrect — a substance cannot be "reduced" just because it forms a stable product; reduction specifically means loss of oxygen (or gain of hydrogen), which only applies to CuO here, not H2.',
        'Incorrect — oxygen is being transferred from CuO to H2, which is precisely the gain/loss of oxygen that defines oxidation-reduction; it is a redox reaction, not a simple displacement of one element by another from a compound.',
      ],
    },
    {
      question: 'Chip manufacturers often flush packets of chips with nitrogen gas. What phenomenon does this help prevent, and why?',
      options: [
        'Corrosion, because nitrogen reacts with the metal packaging',
        'Rancidity, because nitrogen is unreactive and keeps oxygen away from the oils in the chips',
        'A combination reaction between the chips and oxygen that would form a precipitate',
        'Decomposition of the chips due to exposure to sunlight',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — corrosion is the slow eating away of metals by moisture/acids in their surroundings; it is not relevant to chips or their food-grade packaging in this context, and nitrogen does not react with the metal.',
        'Correct! Rancidity is the oxidation of fats and oils, which spoils their smell and taste. Nitrogen is an unreactive (inert) gas, so filling the packet with it displaces oxygen and slows down oxidation of the oils in the chips, keeping them fresh longer.',
        'Incorrect — oxidation of oils in food does not produce a precipitate (a solid separating out of a solution); rancidity is about spoiled taste/smell, not precipitate formation.',
        'Incorrect — the concern here is a slow oxidation (rancidity) of the fats/oils in the chips, not a light-driven (photolytic) decomposition of the food itself.',
      ],
    },
  ],
}
