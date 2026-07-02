// NCERT Class 10 Science — Chapter 9: Light – Reflection and Refraction
export default {
  id: 'jesc109',
  number: 9,
  subject: 'Physics',
  title: 'Light – Reflection and Refraction',
  notes: {
    intro:
      'Light enables us to see objects because it is reflected by them and reaches our eyes; we see through transparent media because light is transmitted through them. Light appears to travel in straight lines (rays), and this straight-line picture lets us explain reflection by mirrors and refraction (bending) of light as it passes between media of different optical densities, including how curved mirrors and lenses form images.',
    sections: [
      {
        heading: 'Reflection of Light and Spherical Mirrors',
        points: [
          'Laws of reflection (true for all reflecting surfaces, including spherical ones): (i) the angle of incidence equals the angle of reflection, and (ii) the incident ray, the normal at the point of incidence, and the reflected ray all lie in the same plane.',
          'A spherical mirror is a mirror whose reflecting surface forms part of a sphere. A concave mirror curves inward (reflecting surface faces the centre of the sphere); a convex mirror curves outward.',
          'Pole (P): the centre of the reflecting surface of the mirror. Centre of curvature (C): the centre of the sphere of which the mirror is a part — it lies in front of a concave mirror and behind a convex mirror. Radius of curvature (R): the distance PC. Principal axis: the straight line through P and C, normal to the mirror at the pole.',
          'Principal focus (F): the point on the principal axis where rays parallel to the principal axis actually converge, after reflection, in a concave mirror, or from which they appear to diverge in a convex mirror. Focal length (f) is the distance PF.',
          'For mirrors of small aperture, the radius of curvature is twice the focal length: R = 2f, so the principal focus lies midway between the pole and the centre of curvature.',
        ],
      },
      {
        heading: 'Image Formation by Spherical Mirrors',
        points: [
          'Ray diagrams use any two of four easy-to-trace rays: (i) parallel to the principal axis → reflects through/appears to diverge from F; (ii) through/directed at F → reflects parallel to the axis; (iii) through/directed at C → reflects back along the same path; (iv) striking the pole obliquely → reflects obliquely, making equal angles with the axis.',
          'Concave mirror images by object position: at infinity → point-sized, real, inverted image at F; beyond C → diminished, real, inverted image between F and C; at C → same-size, real, inverted image at C; between C and F → enlarged, real, inverted image beyond C; at F → highly enlarged image at infinity; between P and F → enlarged, virtual, erect image behind the mirror.',
          'A convex mirror always forms a virtual, erect, diminished image that lies between P and F, behind the mirror, for every object position (the image shrinks toward F, point-sized, only when the object is at infinity).',
          'Uses of concave mirrors: torches, search-lights and headlights (to get powerful parallel beams), shaving mirrors and dentists’ mirrors (enlarged image of face/teeth), and solar furnaces (concentrating sunlight).',
          'Uses of convex mirrors: rear-view/side mirrors of vehicles, because they always give an erect (though diminished) image and, being curved outward, have a wider field of view than a plane mirror of the same size.',
        ],
      },
      {
        heading: 'Sign Convention, Mirror Formula and Magnification',
        points: [
          'New Cartesian Sign Convention: the pole (P) of the mirror is the origin and the principal axis is the x-axis; the object is always placed to the left, so light falls on the mirror from the left.',
          'Distances measured to the right of the pole (along the direction of incident light) are positive; distances to the left are negative. Heights measured upward from the principal axis are positive; heights measured downward are negative.',
          'Consequently a concave mirror’s focal length is negative (focus lies in front, to the left) and a convex mirror’s focal length is positive (focus lies behind, to the right).',
          'Mirror formula: 1/v + 1/u = 1/f, relating image distance (v), object distance (u) and focal length (f); it holds for all spherical mirrors and all object positions provided the sign convention is applied consistently.',
          'Magnification m = h′/h = −v/u, where h is object height and h′ is image height. A positive m means a virtual, erect image; a negative m means a real, inverted image. |m| > 1 means the image is enlarged, |m| < 1 means it is diminished.',
        ],
      },
      {
        heading: 'Refraction of Light and Refractive Index',
        points: [
          'Refraction is the change in direction of light as it passes obliquely from one transparent medium into another, caused by a change in the speed of light in the two media; light travelling exactly along the normal to the interface passes straight through without bending.',
          'Laws of refraction: (i) the incident ray, the refracted ray, and the normal at the point of incidence all lie in the same plane; (ii) Snell’s law — sin i / sin r is a constant for a given pair of media and a given colour of light, called the refractive index of the second medium with respect to the first.',
          'A ray bends towards the normal when passing from a rarer to a denser medium (light slows down), and bends away from the normal when passing from a denser to a rarer medium (light speeds up).',
          'Absolute refractive index n = c/v, the ratio of the speed of light in vacuum/air (c) to its speed in the medium (v); the relative refractive index of medium 2 w.r.t. medium 1 is n21 = v1/v2.',
          'Optical density is not the same as mass density: the medium with the higher refractive index is optically denser regardless of its mass density — e.g. kerosene (n = 1.44) is optically denser than water (n = 1.33) even though kerosene has a lower mass density.',
          'Typical refractive indices: air ≈ 1.0003, water 1.33, kerosene 1.44, crown glass 1.52, diamond 2.42 (one of the highest, which is why diamonds sparkle).',
        ],
      },
      {
        heading: 'Spherical Lenses and Image Formation',
        points: [
          'A lens is a transparent medium bound by at least one spherical surface. A convex (double convex) lens is thicker at the middle and converges light rays; a concave (double concave) lens is thicker at the edges and diverges light rays.',
          'Optical centre (O): the central point of the lens through which a ray passes without any deviation. Each lens has two centres of curvature (C1, C2) and two principal foci (F1, F2), one on each side, since light can fall on either face. Focal length f is the distance from O to a principal focus.',
          'Convex lens images by object position: at infinity → point-sized, real, inverted image at F2; beyond 2F1 → diminished, real, inverted image between F2 and 2F2; at 2F1 → same-size, real, inverted image at 2F2; between F1 and 2F1 → enlarged, real, inverted image beyond 2F2; at F1 → image at infinity; between F1 and O → enlarged, virtual, erect image on the same side as the object.',
          'A concave lens always forms a virtual, erect, diminished image located between O and F1 on the same side as the object, regardless of where the object is placed.',
          'Ray construction rules for lenses: a ray parallel to the principal axis refracts through the principal focus (convex) or appears to diverge from it (concave); a ray directed through/towards a principal focus emerges parallel to the axis; a ray through the optical centre passes straight through undeviated.',
        ],
      },
      {
        heading: 'Lens Formula, Magnification and Power',
        points: [
          'Sign convention for lenses follows the same New Cartesian rules as mirrors, but all distances are measured from the optical centre O. A convex lens has a positive focal length; a concave lens has a negative focal length.',
          'Lens formula: 1/v − 1/u = 1/f, relating image distance (v), object distance (u) and focal length (f); it is valid for both convex and concave lenses in every situation, provided correct signs are used.',
          'Magnification produced by a lens: m = h′/h = v/u. A positive m indicates a virtual, erect image; a negative m indicates a real, inverted image.',
          'Power of a lens P = 1/f, with f measured in metres. The SI unit of power is the dioptre (D); 1 D is the power of a lens of focal length 1 m (1 D = 1 m⁻¹). A convex lens has positive power (converging); a concave lens has negative power (diverging).',
          'When several thin lenses are placed in contact, the net power is the algebraic sum of the individual powers: P = P1 + P2 + P3 + … — this is how opticians combine corrective lenses during eye tests.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Pole (P)', definition: 'The centre point of the reflecting surface of a spherical mirror.' },
      { term: 'Centre of curvature (C)', definition: 'The centre of the sphere of which the mirror’s reflecting surface forms a part; it lies in front of a concave mirror and behind a convex mirror.' },
      { term: 'Principal focus (F)', definition: 'The point on the principal axis where rays parallel to the axis converge (concave mirror/convex lens) or from which they appear to diverge (convex mirror/concave lens) after reflection or refraction.' },
      { term: 'Focal length (f)', definition: 'The distance between the pole (mirror) or optical centre (lens) and the principal focus.' },
      { term: 'Real image', definition: 'An image formed by the actual intersection of reflected or refracted light rays; it can be caught on a screen and is usually inverted.' },
      { term: 'Virtual image', definition: 'An image formed where light rays only appear to meet (not an actual intersection); it cannot be caught on a screen and is always erect.' },
      { term: 'Refraction', definition: 'The bending of light as it passes obliquely from one transparent medium to another, caused by a change in the speed of light.' },
      { term: 'Refractive index', definition: 'A measure of how much a medium bends light, equal to the ratio of the speed of light in vacuum (or a reference medium) to its speed in the given medium.' },
      { term: 'Optical centre (O)', definition: 'The central point of a lens through which a ray of light passes without any deviation.' },
      { term: 'Magnification (m)', definition: 'The ratio of the height of the image to the height of the object, indicating whether the image is enlarged, diminished, or the same size, and whether it is erect or inverted.' },
      { term: 'Power of a lens (P)', definition: 'The reciprocal of the focal length (in metres) of a lens, measured in dioptre (D); it indicates the degree of convergence or divergence produced.' },
      { term: 'Snell’s law', definition: 'The law stating that sin i / sin r is a constant (the refractive index) for a given pair of media and a given colour of light.' },
    ],
  },
  quiz: [
    {
      question: 'Which statement correctly expresses the laws of reflection of light?',
      options: [
        'The angle of incidence is always greater than the angle of reflection.',
        'The angle of incidence equals the angle of reflection, and the incident ray, the normal, and the reflected ray all lie in the same plane.',
        'The angle of incidence equals the angle of reflection, but the reflected ray lies in a different plane from the incident ray and the normal.',
        'The angle of reflection depends on the colour of the incident light.',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — the first law of reflection states that the angle of incidence EQUALS the angle of reflection; it is never greater than it.',
        'Correct! This combines both laws of reflection exactly: the angle of incidence equals the angle of reflection, and the incident ray, the normal at the point of incidence, and the reflected ray all lie in the same plane. These laws apply to plane and spherical reflecting surfaces alike.',
        'Incorrect — the second law explicitly requires the incident ray, normal, and reflected ray to lie in the SAME plane, not different planes.',
        'Incorrect — the laws of reflection are purely geometric and do not depend on the colour (wavelength) of light; colour dependence is relevant to phenomena like dispersion in refraction, not reflection.',
      ],
    },
    {
      question: 'An object is placed between the pole and the principal focus of a concave mirror. What are the position, size and nature of the image formed?',
      options: [
        'Real, inverted, and diminished, formed between F and C',
        'Virtual, erect, and enlarged, formed behind the mirror',
        'Real, inverted, and the same size as the object, formed at C',
        'Real, inverted, and highly diminished, formed at F',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — a diminished, real, inverted image between F and C is formed when the object is placed BEYOND C, not between P and F.',
        'Correct! When an object is placed between the pole (P) and the principal focus (F) of a concave mirror, the reflected rays diverge and only appear to meet behind the mirror, producing a virtual, erect, and magnified image — this is the principle used in shaving and dentist’s mirrors.',
        'Incorrect — an image at C, of the same size as the object, is formed only when the object itself is placed exactly at C.',
        'Incorrect — a highly diminished, point-sized real image at F is formed when the object is at infinity, not between P and F.',
      ],
    },
    {
      question: 'A candle is placed exactly at the centre of curvature (C) of a concave mirror. Where is the image formed and what are its characteristics?',
      options: [
        'At the focus F; highly diminished, point-sized, real and inverted',
        'At C; the same size as the object, real and inverted',
        'Between the pole and the focus; virtual, erect and enlarged',
        'At infinity; no image is formed',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — a highly diminished, point-sized image at F occurs only when the object is placed at infinity, not at C.',
        'Correct! When the object is placed exactly at the centre of curvature of a concave mirror, the image also forms exactly at C, is the same size as the object, and is real and inverted — this is a standard result you can verify with the mirror formula (u = f = R/2 relationship gives v = u).',
        'Incorrect — a virtual, erect, enlarged image forms only when the object lies between the pole and the focus, not at C.',
        'Incorrect — the image goes to infinity only when the object is placed at the focus F, not at C; at C, a finite, well-formed image is obtained.',
      ],
    },
    {
      question: 'Why are convex mirrors preferred over plane mirrors as rear-view/side mirrors on vehicles?',
      options: [
        'Because they form a real, magnified image, letting the driver see small details behind clearly',
        'Because they always form a virtual, erect, diminished image and have a wider field of view than a plane mirror of the same size',
        'Because they form an inverted image, which helps the driver judge distance more accurately',
        'Because the image is always formed exactly at the focus, making it easier to judge the speed of following vehicles',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — convex mirrors never form real images; the reflected rays diverge and only appear to meet behind the mirror, so the image is always virtual, and it is diminished, not magnified.',
        'Correct! A convex mirror always produces a virtual, erect image regardless of the object’s distance, and because its reflecting surface curves outward it captures light from a much wider area, giving the driver a larger field of view than a plane mirror of the same size — even though the image is somewhat diminished.',
        'Incorrect — a convex mirror’s image is always erect, never inverted, for any position of the object.',
        'Incorrect — the image lies at the focus only when the object is at infinity; for objects at finite distances, the (virtual) image lies between the pole and the focus, not fixed at the focus.',
      ],
    },
    {
      question: 'An object is placed 30 cm in front of a concave mirror of focal length 15 cm. Using the mirror formula and the New Cartesian sign convention, what is the image distance, and is the image real or virtual?',
      options: [
        'v = −30 cm; the image is real, inverted, and the same size as the object, formed at C',
        'v = +30 cm; the image is virtual and erect, formed behind the mirror',
        'v = −15 cm; the image is real, formed exactly at the focus',
        'v = −10 cm; the image is real and diminished',
      ],
      correctIndex: 0,
      explanations: [
        'Correct! With u = −30 cm and f = −15 cm (concave mirror), the mirror formula gives 1/v = 1/f − 1/u = (−1/15) − (−1/30) = −1/30, so v = −30 cm. The object is at the centre of curvature (R = 2f = 30 cm), so the image also forms at C: real, inverted, and the same size as the object.',
        'Incorrect — a positive v would place the image behind the mirror, which cannot happen for a real object in front of a concave mirror producing a real image; the correct calculation gives v = −30 cm, in front of the mirror.',
        'Incorrect — the image forms exactly at the focus only when the object is at infinity; here the object is at a finite distance (30 cm), so the calculation correctly places the image at −30 cm, not at the focus.',
        'Incorrect — this does not match the mirror formula calculation; substituting u = −30 cm and f = −15 cm correctly gives v = −30 cm, not −10 cm.',
      ],
    },
    {
      question: 'Which of the following correctly states Snell’s law of refraction?',
      options: [
        'sin i / sin r is a constant for a given pair of media and a given colour of light — this constant is the refractive index',
        'sin i × sin r is a constant for any two media, regardless of the colour of light used',
        'The angle of incidence is always equal to the angle of refraction in any medium',
        'tan i / tan r is a constant equal to the speed of light in vacuum',
      ],
      correctIndex: 0,
      explanations: [
        'Correct! Snell’s law states that for a given pair of media and a given colour (wavelength) of light, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant; this constant is called the refractive index of the second medium with respect to the first.',
        'Incorrect — Snell’s law involves the RATIO sin i / sin r, not the product of the two sines.',
        'Incorrect — the angle of incidence equals the angle of refraction only in the special case of normal incidence (i = 0) or when both media have identical optical density; in general refraction bends the ray so the angles differ.',
        'Incorrect — Snell’s law uses the sine function, not the tangent, and the constant is the (dimensionless) refractive index, not the speed of light in vacuum.',
      ],
    },
    {
      question: 'Light travels from water (refractive index 1.33) into kerosene (refractive index 1.44). What happens to the ray at the interface, and why?',
      options: [
        'It bends away from the normal, because kerosene is optically rarer than water',
        'It bends towards the normal, because kerosene is optically denser than water, even though kerosene has a lower mass density',
        'It does not bend at all, since both are liquids',
        'It bends away from the normal, because kerosene has a higher mass density than water',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — kerosene has a HIGHER refractive index (1.44) than water (1.33), which means kerosene is optically DENSER than water, not rarer, so this reasoning and its conclusion are both wrong.',
        'Correct! A medium with a higher refractive index is optically denser, regardless of its mass density. Kerosene (n = 1.44) is optically denser than water (n = 1.33) even though kerosene’s mass density is actually lower than water’s. Light travelling from a rarer to a denser medium slows down and bends towards the normal.',
        'Incorrect — since water and kerosene have different refractive indices, light does change speed and direction at the interface; the fact that both are liquids does not exempt the ray from refraction.',
        'Incorrect — kerosene has a LOWER mass density than water, so this option gets the mass-density comparison backwards; also, the bending direction is determined by optical density (refractive index), not mass density, and the ray actually bends towards the normal here, not away.',
      ],
    },
    {
      question: 'An object is placed between F1 and 2F1 in front of a convex lens. What are the position, size and nature of the image?',
      options: [
        'Real, inverted, and enlarged, formed beyond 2F2 on the other side of the lens',
        'Virtual, erect, and enlarged, formed on the same side as the object',
        'Real, inverted, and diminished, formed between F2 and 2F2',
        'Real, inverted, and the same size as the object, formed at 2F2',
      ],
      correctIndex: 0,
      explanations: [
        'Correct! For a convex lens, when the object is placed between F1 and 2F1, the refracted rays converge beyond 2F2 on the far side, forming a real, inverted image that is enlarged compared to the object — this is how a magnifying projector setup works.',
        'Incorrect — a virtual, erect, enlarged image (on the same side as the object) is formed by a convex lens only when the object lies between F1 and the optical centre O, not between F1 and 2F1.',
        'Incorrect — a diminished, real, inverted image between F2 and 2F2 is formed when the object lies BEYOND 2F1, not between F1 and 2F1.',
        'Incorrect — a same-size, real, inverted image at 2F2 is formed only when the object is placed exactly at 2F1, not anywhere between F1 and 2F1.',
      ],
    },
    {
      question: 'A concave lens is used to view an object placed at various distances from it. Which statement is always true, regardless of the object’s position?',
      options: [
        'The image is always real and inverted',
        'The image is always virtual, erect, and diminished, located between the optical centre and F1 on the same side as the object',
        'The image is real for objects beyond 2F and virtual for objects within F, just like a convex lens',
        'The image is always the same size as the object',
      ],
      correctIndex: 1,
      explanations: [
        'Incorrect — a concave (diverging) lens never forms a real image of a real object; the refracted rays always diverge and only appear to meet on the same side as the object, producing a virtual image.',
        'Correct! Unlike a convex lens, a concave lens always produces a virtual, erect, and diminished image lying between the optical centre and the principal focus F1, on the same side of the lens as the object, no matter how far or near the object is placed.',
        'Incorrect — this behaviour (real image beyond 2F, virtual image within F) describes a convex (converging) lens, not a concave lens, which behaves consistently the same way at every object distance.',
        'Incorrect — the image size varies with object distance (it shrinks as the object moves farther away), and it is always smaller than the object, never the same size.',
      ],
    },
    {
      question: 'A convex lens has a focal length of 25 cm. What is its power, and what does the sign of this value indicate?',
      options: [
        '+4 D; the positive sign confirms it is a converging (convex) lens',
        '−4 D; the negative sign shows it is a diverging lens',
        '+0.25 D; a very weakly converging lens',
        '+4 D, but this actually indicates the lens must be concave, since concave lenses have positive power',
      ],
      correctIndex: 0,
      explanations: [
        'Correct! Power P = 1/f, with f expressed in metres. Here f = 25 cm = 0.25 m, so P = 1/0.25 = +4 D. The positive sign of the power matches the positive (real) focal length of a convex lens, confirming it is converging.',
        'Incorrect — the focal length of a convex lens is positive, so its power must also be positive (+4 D); a negative power would indicate a concave (diverging) lens instead.',
        'Incorrect — this value results from forgetting to convert the focal length from centimetres to metres before taking the reciprocal; using f = 0.25 m correctly gives P = 1/0.25 = 4 D, not 0.25 D.',
        'Incorrect — by the sign convention, a convex lens has positive focal length and hence positive power, while a concave lens has negative focal length and negative power; positive power always indicates a convex (converging) lens, not concave.',
      ],
    },
  ],
}
