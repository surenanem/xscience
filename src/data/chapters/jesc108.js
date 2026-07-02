// NCERT Class 10 Science — Chapter 8: Heredity and Evolution
export default {
  id: 'jesc108',
  number: 8,
  subject: 'Biology',
  title: 'Heredity and Evolution',
  notes: {
    intro:
      'Reproduction, whether asexual or sexual, produces offspring that resemble their parents but also differ from them in subtle ways. These variations are inherited according to predictable rules discovered by Gregor Mendel using garden pea plants, and they form the raw material on which natural selection acts. Over long periods of time, the accumulation and selection of variations within populations can give rise to new species — the process of evolution. This chapter explores how traits are inherited across generations, how the sex of an individual is determined in humans, and the evidence — from body structures to fossils — that reveals how present-day organisms are related to their ancestors.',
    sections: [
      {
        heading: 'Accumulation of Variation during Reproduction',
        points: [
          'Reproduction produces offspring similar to, but subtly different from, their parents; these differences accumulate generation after generation.',
          'In asexual reproduction (e.g., a bacterium dividing), variations are small, arising mainly from minor inaccuracies during DNA copying.',
          'Sexual reproduction generates far more variation because it combines DNA from two parents and reshuffles their gene combinations.',
          'Not all variations are equally useful: those that help an individual survive in its environment (e.g., heat-tolerant bacteria surviving a heat wave) are more likely to persist and be passed on.',
          'This differential survival and selection of variations by environmental factors provides the basic raw material for evolution.',
        ],
      },
      {
        heading: "Mendel's Experiments and the Monohybrid Cross",
        points: [
          'Gregor Mendel studied contrasting traits in garden pea plants (e.g., tall/short stems, round/wrinkled seeds, violet/white flowers) and carefully counted offspring of each type across generations.',
          'Crossing a pure-breeding tall plant (TT) with a pure-breeding short plant (tt) gave an F1 generation that was entirely tall — traits do not blend; only one parental trait is expressed in the hybrid.',
          'The trait expressed in F1 (tallness) is called the dominant trait; the trait that is masked (shortness) is called the recessive trait.',
          'Self-pollinating F1 (Tt) plants gave an F2 generation with a 3:1 ratio of tall to short plants, showing that the recessive trait, though hidden in F1, was not lost and reappeared in F2.',
          'The underlying genotypic ratio in F2 is 1:2:1 (TT:Tt:tt): every trait is controlled by two copies (alleles) of a gene, one inherited from each parent; a single dominant allele (T) is enough to produce the dominant phenotype, but both copies must be recessive (tt) for the recessive phenotype to appear.',
        ],
      },
      {
        heading: 'Dihybrid Cross and Independent Inheritance',
        points: [
          'When Mendel crossed plants differing in two traits at once (round, yellow seeds RRYY × wrinkled, green seeds rryy), the F1 progeny showed only the dominant traits (round, yellow).',
          'Self-pollinating F1 (RrYy) plants gave an F2 generation with four types of seeds — round-yellow, round-green, wrinkled-yellow, wrinkled-green — in an approximate ratio of 9:3:3:1.',
          'The appearance of new combinations in F2 (round-green and wrinkled-yellow), not seen in either original parent, showed that the factors for seed shape and seed colour assort independently of one another during gamete formation.',
          'This is the law of independent assortment: different traits are inherited independently of each other, allowing new combinations of traits to appear among the offspring of sexual reproduction.',
        ],
      },
      {
        heading: 'Molecular Basis of Traits and Sex Determination',
        points: [
          "A gene is a section of DNA that carries the information to make one particular protein; proteins (often enzymes) control how a trait is expressed — e.g., an enzyme's efficiency can control the amount of a growth hormone made, which in turn determines plant height.",
          'Each individual carries two copies (alleles) of every gene, one inherited from each parent, but each germ cell (sperm or egg) carries only one copy of each gene — the two copies are restored when germ cells fuse at fertilisation.',
          'Genes are organised on chromosomes; humans have 23 pairs of chromosomes — 22 pairs are identical in both sexes (autosomes) and one pair is the sex chromosomes.',
          'Human females have a matched pair of sex chromosomes (XX); males have a mismatched pair (XY, where Y is shorter than X).',
          "Every child inherits an X chromosome from the mother; the sex of the child depends on whether the father's sperm carries an X (resulting in a girl, XX) or a Y (resulting in a boy, XY) — giving an expected 50:50 ratio of girls to boys.",
        ],
      },
      {
        heading: 'Evolution and Speciation',
        points: [
          'Evolution is the gradual change in the heritable characteristics of a population over successive generations, driven by the accumulation and selection of variations.',
          "Natural selection favours variations that improve an individual's chances of survival and reproduction in a given environment; unfavourable variations tend to be eliminated over time.",
          "Genetic drift — random changes in the frequency of genes in a small population purely by chance — can also alter a population's characteristics, independent of any survival advantage.",
          'Speciation is the formation of a new species; it often occurs when populations of the same species become geographically isolated, preventing interbreeding (gene flow) so that each population accumulates different variations independently.',
          'Over enough time and isolation, the separated populations may become so different that they can no longer interbreed even if reunited, marking the emergence of distinct species.',
          'Evolution is not a directed march towards "improvement" or complexity — simpler organisms such as bacteria are just as successfully adapted to their niche as more complex ones, since evolutionary success is measured by survival and reproduction, not complexity.',
        ],
      },
      {
        heading: 'Evidence for Evolution',
        points: [
          'Homologous organs have the same basic structure and origin but may perform different functions in different species (e.g., the forelimbs of humans, bats, and whales share the same bone plan but are used for grasping, flying, and swimming respectively) — evidence of common ancestry and divergent evolution.',
          'Analogous organs perform similar functions but have different structures and origins (e.g., the wings of a bird and the wings of a butterfly) — evidence of convergent evolution, where unrelated organisms independently evolve similar adaptations, not shared ancestry.',
          'Fossils are the preserved remains or impressions of dead organisms found in rock layers; deeper layers generally contain older fossils, and fossils can be dated using methods such as radioactive (carbon) dating.',
          'Fossils such as Archaeopteryx, which shows both reptilian features (teeth, a long bony tail) and avian features (feathers, wings), serve as connecting links showing how one group of organisms may have given rise to another.',
          'Comparing body structures, fossils, and (in modern studies) DNA sequences across species helps biologists construct evolutionary trees showing how present-day organisms are related through common ancestors.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Variation', definition: 'Differences in traits among individuals of a species, arising during reproduction.' },
      { term: 'Heredity', definition: 'The process by which traits and characteristics are passed on reliably from parents to offspring.' },
      { term: 'Gene', definition: 'A section of DNA that carries the information needed to make a particular protein and thereby control a trait.' },
      { term: 'Allele', definition: 'One of the alternative versions of a gene (e.g., T or t) that an organism inherits from each parent.' },
      { term: 'Dominant trait', definition: 'A trait that is expressed in the offspring even when only one copy of its controlling allele is present.' },
      { term: 'Recessive trait', definition: 'A trait that is expressed only when both of the inherited alleles are the recessive version.' },
      { term: 'Dihybrid cross', definition: 'A genetic cross that tracks the inheritance of two pairs of contrasting traits at the same time.' },
      { term: 'Sex chromosome', definition: 'The chromosome pair (XX in human females, XY in human males) whose inheritance determines the biological sex of an individual.' },
      { term: 'Speciation', definition: 'The evolutionary process by which a new species forms, often driven by geographical isolation and accumulated variation.' },
      { term: 'Homologous organs', definition: 'Organs with the same basic structure and origin but different functions in different species, indicating common ancestry.' },
      { term: 'Analogous organs', definition: 'Organs with different structure and origin but similar function, arising from convergent evolution rather than shared ancestry.' },
      { term: 'Fossil', definition: 'The preserved remains or impression of an organism that lived in the past, used as evidence for evolution.' },
    ],
  },
  quiz: [
    {
      question:
        'Mendel crossed pure-breeding tall pea plants (TT) with pure-breeding short pea plants (tt). What did he observe in the F1 generation, and what did this reveal?',
      options: [
        'All F1 plants were of medium height, showing that the two parental traits blend together',
        'All F1 plants were tall, showing that tallness is the dominant trait over shortness',
        'Half the F1 plants were tall and half were short, in a 1:1 ratio',
        'All F1 plants were short, showing that shortness is the dominant trait over tallness',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — no medium-height plants appeared in F1. Mendel found that traits do not blend; only one of the two parental traits is expressed in the hybrid, not an intermediate.',
        'Correct! All F1 plants were tall even though one parent was short. This showed that when two different versions (alleles) of a trait are inherited together, only the dominant one (tallness, T) is expressed, while the other (shortness, t) is masked.',
        'Incorrect — a 1:1 ratio of tall to short plants is not seen in the F1 generation of this cross; every F1 plant was tall.',
        'Incorrect — shortness did not appear at all in F1; being the recessive trait here, it stays hidden until it reappears in the F2 generation.',
      ],
    },
    {
      question:
        'When Mendel self-pollinated the tall F1 plants (Tt), one quarter of the resulting F2 progeny turned out to be short. What does this reveal about inheritance?',
      options: [
        'The shortness trait had disappeared permanently once F1 was formed',
        'Both the tallness and shortness factors were carried by the F1 plants, but only tallness was expressed; F2 shows a 3:1 phenotypic ratio (tall:short), matching a 1:2:1 genotypic ratio (TT:Tt:tt)',
        'The F1 plants must have been genetically identical to the tall parent (TT), so no short plants should have appeared at all',
        'Self-pollination caused a fresh mutation that created the short trait in F2',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — shortness was not lost in F1; it was simply hidden (masked) by the dominant tallness allele, and it reappeared once F1 plants were self-pollinated.',
        "Correct! F1 plants (Tt) carry one allele for tallness and one for shortness. Self-pollination allows tt combinations to reform, giving a 3:1 tall-to-short ratio in F2, which corresponds to the genotypic ratio TT:Tt:tt = 1:2:1 — exactly Mendel's monohybrid results.",
        'Incorrect — the appearance of short plants in F2 proves the F1 plants were Tt (carrying a hidden recessive allele), not TT; if they were TT, all F2 offspring would be tall.',
        'Incorrect — no new mutation is needed to explain this; it is simply the reappearance of the pre-existing recessive allele (t) that had been masked, not newly created, in F1.',
      ],
    },
    {
      question:
        'Mendel crossed pea plants pure-breeding for round, yellow seeds (RRYY) with plants pure-breeding for wrinkled, green seeds (rryy). When the resulting RrYy F1 plants were self-pollinated, the F2 seeds appeared in what approximate ratio of round-yellow : round-green : wrinkled-yellow : wrinkled-green?',
      options: ['9:3:3:1', '3:3:1:1', '1:2:1:2', '1:1:1:1'],
      correctIndex: 0,
      explanations: [
        'Correct! This is the classic dihybrid cross ratio Mendel obtained: about 9/16 round-yellow, 3/16 round-green, 3/16 wrinkled-yellow, and 1/16 wrinkled-green, arising because the shape and colour alleles assort independently into gametes.',
        'Incorrect — this is not the ratio Mendel observed; the correct dihybrid F2 ratio is 9:3:3:1, reflecting the independent combination of two dominant and two recessive alleles across two genes.',
        'Incorrect — this ratio does not match dihybrid inheritance; a 1:2:1 pattern is what appears in the genotypic ratio of a single-gene (monohybrid) cross, not the phenotypic ratio of a two-gene cross.',
        'Incorrect — an equal 1:1:1:1 ratio would only be expected from a test cross of a double heterozygote with a double recessive plant, not from self-pollinating the F1 (RrYy × RrYy) generation.',
      ],
    },
    {
      question:
        'In the dihybrid cross above, the F2 generation included round-green seeds and wrinkled-yellow seeds — combinations not present in either original parent plant. What does this demonstrate?',
      options: [
        'Seed shape and seed colour are linked and are always inherited together',
        'Seed shape and seed colour are inherited independently of each other, so the factors for each trait can recombine freely in the offspring',
        'A spontaneous mutation occurred during self-pollination, creating entirely new traits',
        'Round and yellow must always be recessive traits',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — if the two traits were linked and always inherited together, only the parental combinations (round-yellow and wrinkled-green) would appear in F2; the new combinations rule this out.',
        'Correct! The appearance of new trait combinations in F2 shows that the alleles for seed shape and seed colour separate and combine independently during gamete formation — this is the law of independent assortment.',
        'Incorrect — no new traits (like a new colour or shape) were created; only new combinations of the already-existing traits (round, wrinkled, yellow, green) appeared, which is expected from independent assortment, not mutation.',
        'Incorrect — round and yellow are actually the dominant traits in this cross (seen in the F1 generation), not recessive ones.',
      ],
    },
    {
      question:
        "According to the molecular explanation of inheritance, how does a gene actually bring about a physical trait such as plant height?",
      options: [
        "The gene directly becomes the plant's stem tissue without involving any other molecules",
        'A gene encodes a particular protein (often an enzyme); the efficiency of that protein — for example, in making a growth hormone — determines the extent to which the trait (such as height) is expressed',
        'Height is decided purely by soil and climate, and genes play no role in it',
        "Genes are themselves made of the growth hormone, so more genes directly means a taller plant",
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — a gene does not become body tissue; it is a segment of DNA that carries coded instructions for building a specific protein.',
        'Correct! A gene provides the information to make a protein. If that protein is, say, an enzyme needed to produce a growth hormone, an efficient version of the enzyme leads to more hormone and a taller plant, while a less efficient version leads to less hormone and a shorter plant. This is how genes control traits at the molecular level.',
        'Incorrect — while environment can influence growth, the chapter explains that the trait of tallness/shortness itself is fundamentally controlled by inherited genes acting through proteins.',
        'Incorrect — genes are made of DNA, not hormone molecules; a gene provides the instructions to produce a protein, which may then help produce a hormone.',
      ],
    },
    {
      question:
        'New species can arise when populations of the same species become geographically separated from each other. What is the main reason geographical isolation can lead to speciation?',
      options: [
        'It stops gene flow (interbreeding) between the separated populations, allowing each to accumulate different variations independently until they become too different to interbreed',
        'It causes every individual in the isolated population to mutate into a new species simultaneously',
        'It has essentially no effect, since populations evolve at the same rate regardless of location',
        'It simply increases population size, which alone is sufficient to create a new species',
      ],
      correctIndex: 0,
      explanations: [
        'Correct! Geographical isolation prevents interbreeding between the separated groups. Each group then accumulates its own variations (through mutation, natural selection, and genetic drift) independently. Given enough time, the two populations can become so genetically different that they can no longer interbreed even if they meet again — resulting in speciation.',
        'Incorrect — evolution and speciation happen gradually over many generations through the accumulation of small variations, not through every individual mutating into a new species at once.',
        'Incorrect — isolated populations often face different environments and selection pressures, so their evolutionary paths and rates can diverge significantly over time; isolation is precisely what allows this divergence.',
        'Incorrect — population size alone does not create a new species; genetic drift can occur more strongly in small populations, but speciation fundamentally requires accumulated genetic divergence combined with reproductive isolation, not simply more individuals.',
      ],
    },
    {
      question:
        "In humans, every child inherits an X chromosome from the mother. What determines whether the child is born a girl or a boy?",
      options: [
        'The temperature of the womb during pregnancy, similar to some reptiles',
        "Whether the sperm from the father carries an X chromosome (resulting in a girl, XX) or a Y chromosome (resulting in a boy, XY)",
        "Whether the mother's egg carries an X or a Y chromosome",
        'Both parents must independently contribute a Y chromosome for a boy to be born',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — temperature-dependent sex determination occurs in some reptiles, but in humans, sex is determined genetically by the sex chromosomes inherited at fertilisation, not by environmental temperature.',
        "Correct! Human females are XX and males are XY. Every egg carries an X chromosome, but sperm can carry either an X or a Y. If a sperm carrying X fertilises the egg, the child is XX (girl); if a sperm carrying Y fertilises the egg, the child is XY (boy). This gives an expected 50:50 ratio of girls to boys.",
        "Incorrect — the mother's eggs always carry an X chromosome (since women are XX), so the variable, sex-determining contribution comes from the father's sperm, not the mother's egg.",
        'Incorrect — only the father can contribute a Y chromosome (since he is the only parent with one); the mother, being XX, can only ever contribute an X chromosome.',
      ],
    },
    {
      question:
        'The forelimbs of a human, a bat, and a whale look very different externally and are used for very different purposes (grasping, flying, swimming), but they share the same underlying bone arrangement. Such organs are called:',
      options: [
        'Analogous organs, resulting from convergent evolution',
        'Homologous organs, indicating that these species share a common ancestor and the organs later diverged to serve different functions',
        'Vestigial organs with no evolutionary significance',
        'Fossil organs, since they no longer serve any active function',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — analogous organs share function but not structure/origin. Here it is the opposite: the structure and origin are shared while the functions differ, which is the definition of homologous, not analogous, organs.',
        'Correct! Organs that share the same basic structure and evolutionary origin but perform different functions in different species are called homologous organs. The shared bone plan in these forelimbs indicates that humans, bats, and whales evolved from a common ancestor, with the limb later being adapted differently in each lineage (divergent evolution).',
        'Incorrect — these forelimbs are fully functional structures actively used for grasping, flying, or swimming; vestigial organs are reduced, largely non-functional remnants of structures that were functional in ancestors (e.g., the human appendix).',
        'Incorrect — these are living, functioning organs in present-day organisms, not fossilised remains; fossils are preserved remains of organisms from the past.',
      ],
    },
    {
      question:
        'The wings of a bird and the wings of a butterfly both allow flight, but they have completely different internal structures and developmental origins. Such organs are best described as:',
      options: [
        'Homologous organs, indicating a recent common ancestor',
        'Analogous organs, which evolved independently to serve a similar function — an example of convergent evolution rather than shared ancestry',
        'Identical organs, since they perform exactly the same job',
        'Fossils, since wings only appear in the fossil record',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — homologous organs share the same underlying structure and origin; bird wings (modified forelimb bones) and butterfly wings (thin extensions of the exoskeleton) do not share such structural origin, so they are not homologous.',
        'Correct! Organs that perform a similar function but have different structures and evolutionary origins are called analogous organs. Bird wings and butterfly wings evolved independently in unrelated lineages facing a similar need (flight) — this is convergent evolution, not evidence of a shared recent ancestor.',
        'Incorrect — despite serving a similar purpose, the internal structure, materials, and developmental origin of bird wings and butterfly wings are entirely different, so they are not identical organs.',
        'Incorrect — bird and butterfly wings are living, functioning structures found in organisms today; fossils are preserved remains of organisms from the past, which is a separate line of evidence for evolution.',
      ],
    },
    {
      question: 'Which of the following best explains how fossils provide evidence for evolution?',
      options: [
        'Fossils are living organisms frozen in ice that can be revived to study their traits directly',
        'Fossils are the preserved remains or impressions of dead organisms found in rock layers; their position in the rock (deeper layers generally being older) and their features help trace how organisms have changed over time and how they relate to organisms living today',
        'Fossils only represent organisms that never had any living descendants, so they are unrelated to evolution',
        'Fossils form instantly upon death and therefore reveal nothing about the time period in which an organism lived',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — fossils are not living organisms; they are the preserved remains, impressions, or traces of organisms that died long ago and became embedded in sediment or rock over time.',
        'Correct! Fossils form in layers of sedimentary rock, with deeper layers generally being older. Studying fossils of different ages, along with dating techniques such as radioactive (carbon) dating, lets scientists trace how body structures have changed over time and identify connecting links (such as Archaeopteryx, with both reptilian and bird-like features) between different groups of organisms.',
        'Incorrect — many fossils represent ancestors of organisms alive today; comparing fossils to living species is exactly how evolutionary relationships and lines of descent are worked out.',
        'Incorrect — fossil formation is a slow, gradual process (mineral replacement or preservation in sediment over long periods), and the age of a fossil can be estimated fairly precisely using its position in rock layers and dating techniques.',
      ],
    },
  ],
}
