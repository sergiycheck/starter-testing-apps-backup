const data = {
  american_flag: {
    model_name: 'flaglumi_4th_july_decorated_house_v2.safetensors',
    pic_pos_prompt:
      "A flaglumi house fully decorated for the 4th of July, with its entire facade completely covered by a hyper-realistic crisp mural of the official United States flag. The flag is exactly accurate: 13 alternating red and white stripes, and a blue canton with 50 correctly arranged white stars on the top left of the facade. The single huge mural of the flag covers the entirety of the house's facade.",
    pic_neg_prompt: 'Phrases, words, text, blank garage, blank walls',
    vid_pos_prompt:
      'best quality, 4k, HDR, a wide-angle straight-on shot of a house with intensely waving and shimmering american flag being projected on it, gusts of wind striking the american flag which is projected on house',
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  statue_of_liberty: {
    model_name: 'l1bertlum1_4th_july_decorated_house_v2.safetensors',
    pic_pos_prompt:
      'A typical American suburban l1bertlum1 4th July decorated house with a large mural covering only the walls of the facade (not overlapping windows, doors, or roof). The mural is in a vibrant, neon art style. It features a colorful, cartoonish Statue of Liberty glowing with neon green and blue tones, holding a radiant neon torch. The statue has a calm and serene facial expression. Surrounding the statue are vivid neon fireworks in red, white, and blue. The mural includes many glowing American flags in neon style, waving in different directions across the mural. The entire mural is extremely bright, festive, and glowing with patriotic energy.',
    pic_neg_prompt: '',
    vid_pos_prompt:
      'best quality, 4k, HDR, a wide-angle straight-on shot of a house with bursting fireworks being projected on it, gusts of wind striking the smaller american flags projected on house, projected statue of liberty remains static',
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  american_fireworks: {
    model_name: 'fl0gfirew0rk5_4th_july_decorated_house_v2.safetensors',
    pic_pos_prompt:
      'fl0gfirew0rk5 4th July decorated house with a large, meticulously detailed mural completely covering every wall of the facade. The mural is painted directly onto the exterior in a vibrant art style using only a red, white, and blue color palette. It features a correctly generated, fully detailed American flag that spans every wall, complete with 50 accurately placed stars in the blue canton and 13 precise red and white stripes, all designed to appear as if they are waving naturally in the wind. In front of this flag, the mural also showcases intricately drawn fireworks in red, white, and blue, bursting vividly across the flag-painted background in a frozen moment of patriotic celebration.',
    pic_neg_prompt:
      'Phrases, words, text, blank walls, blank garage door, empty walls, smidged decorations, blurry decorations',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is are fiery fireworks with slowly waving American flag in the background. The fireworks appear to explode slowly, even though it's a projection. The lighting is soft and warm, creating a patriotic and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  american_eagle: {
    model_name: 'eaglefflumi_4thjuly_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "A vibrant mural on an eaglefflumi 4th July decorated house featuring a large eagle's head in the center of the house which wears a patriotic top hat, the eagle's eyes are sharp and intense, with an open beak that suggests a powerful call, surrounding the eagle are red, white, and blue elements, including American flags and stars, the house is adorned with a striking mural of a majestic eagle displayed on the front facade, its wings outstretched, surrounded by fireworks and bursts of color, the trim and accents of the eaglefflumi 4th July decorated house glow with blue neon lights, enhancing the festive atmosphere, additional decorations include smaller eagles and patriotic symbols scattered throughout the design, drawing attention to the theme of freedom and celebration, absolutely 100% of every exterior wall surface must be completely covered in patriotic graffiti or murals, primarily consisting of stars and American flags in various neon styles, there must not be a single visible patch of bare wall anywhere on the house, every inch must be filled with detailed, bright, and glowing 4th of July-themed street art to ensure a fully immersive, uninterrupted patriotic display from edge to edge",
    pic_neg_prompt: 'Phrases, words, text, blank walls',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a head of an eagle screaming with fireworks in the background. The eagle appears to turn slowly, even though it's a projection. The lighting is soft and warm, creating a patriotic and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  turkey: {
    model_name: 'nexturkey_thanksgiving_day_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "full photo of a nexturkey decorated house. The entire facade ' walls, doors, and windows ' is covered in vibrant, ultra-detailed  graffiti. A smiling cartoon turkey with bright orange, red, and yellow feathers is painted boldly on the wall, avoiding the windows and entrance. The house is wrapped in warm autumn tones with detailed fall motifs, golden leaves, and tree branches.",
    pic_neg_prompt:
      'Phrases, words, text, blurry image, blurry, smudgy, blank walls, blank garage, unpainted garage',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a big cartoonish turkey in a pilgrim hat turkey with autumn leaf forest in the background. The turkey appears to tip its hat slowly, even though it's a projection. The lighting is soft and warm, creating a comfy and slightly cartoonish atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  fluid_abstract: {
    model_name: 'lumifluidi_party_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'A full photo of lumifluidi house covered with 4k abstract graffiti. The graffiti features dynamic, 3D bubble-like organic shapes in a variety of sizes and forms, appearing as if they are floating or growing out of the surface. Each bubble displays stunning smooth gradients, shifting through vivid and iridescent colors.',
    pic_neg_prompt: '',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a myriad of abstract curvy organic shapes with blurry purple lighting in the background. The shapes appear to morph slowly, even though it's a projection. The lighting is soft and warm, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  crystals_dispersion: {
    model_name: 'crystlslumi_party_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'A full photo of a crystlslumi house covered with 4k holographic 3D crystals graffiti and neon geometric line shapes graffiti. The house facade is static and detailed, while the surface is decorated with shimmering, semi-transparent holographic crystals of various forms.',
    pic_neg_prompt: '',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are sharp reflective blue and violet crystals with blurry bly background. The crystals appear to shimmer slowly, even though it's a projection. The lighting is sharp and cold, creating a invigorating and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  lines_crystals: {
    model_name: 'crystlslumi_party_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'A full photo of a crstlslumi house covered with 4k holographic 3D crystals and neon geometric line shapes. The house facade is static and detailed, while the surface is decorated with semi-transparent holographic crystals graffiti. Between them, vivid neon outlines graffiti of geometric shapes and abstract structures are interconnected with luminous neon lines covering every surface.',
    pic_neg_prompt: 'Phrases, words, text, blank garage',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are glowing outlines of the house with geometric neon graffiti in the background. The graffiti appear to swirl slowly, even though it's a projection. The lighting is sharp and cold, creating a invigorating and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  baloons_fireworks: {
    model_name: 'ballumi_birthday_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "A large-scale ballumi birthday party mural covering the entire facade of a ballumi house, featuring an explosion of neon balloon illustrations in vibrant shades of pink, blue, yellow, and orange. The balloons appear in various sizes, densely packed and floating all over the surface. Bright, dynamic fireworks murals burst across the entire exterior in warm festive tones'red, gold, and orange'with glowing effects. The mural is immersive, joyful, and celebratory, turning the whole house into a vivid party canvas full of neon colors, sparkling lights, and festive energy.",
    pic_neg_prompt: '',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a swarm of colorful balloons with vibrant fireworks in the background. The balloons appear to fly away slowly, even though it's a projection. The lighting is soft and warm, creating a invigorating and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  outlines: {
    model_name: 'lineslumi_birthday_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "A full photo of lineslumi decorated house completely outlined with glowing neon lines that trace every edge, corner, and architectural detail'rooflines, windows, doors, and wall seams. The neon lines shine in a smooth gradient wrapping around the entire structure with precision. The effect creates a futuristic, radiant glow that highlights the geometry of the building from all sides. The house appears illuminated like a holographic wireframe, with clean, continuous neon light flowing around every contour, giving it a high-tech, celebratory look.",
    pic_neg_prompt: '',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are neon glowing outlines with surreal turquoise shimmering in the background. The outlines appear to shimmer slowly, even though it's a projection. The lighting is soft and cold, creating a celebratory and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly, bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  zombies: {
    model_name: 'lumizomb_halloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "full photo of a Halloween-themed lumizomb house featuring multiple walking zombies in the foreground, full body shot. Every visible wall and the roof of the house is entirely covered in ultra-detailed, high-resolution graffiti murals of zombies framing the windows and terrifying ornaments. The murals are vibrant, with rich, bright colors and filled with countless small details ' rotting flesh, exposed bones, torn clothing, and decaying eyes, each zombie unique and expressive. The house's cracked wall paint blends seamlessly with the artwork, enhancing the horror aesthetic. The mural is crisp, sharp, and vividly painted, turning the entire house into a living zombie nightmare.",
    pic_neg_prompt:
      'Phrases, words, text, blank walls, text graffiti, blank garage',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are realistic zombies walking with cracked wallpaint and flies in the background. The zombies appear to scream, even though it's a projection. The lighting is soft and cold, creating a terryfying and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Walking Dead Overlay.mov',
  },
  cats_bats: {
    model_name: 'catsbatslumi_halloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'Full nighttime photo of a Halloween-themed catsbatslumi house with neon outlines of the entire house. The entire facade and the roof is densely packed with vividly painted cats with glowing eyes in dynamic, expressive poses, and bats with wide, outstretched wings framing the windows and eerie silhouettes on both the facade of the house and garage door. All artwork is set against swirling, magical backgrounds with glowing white moon. The graffities is extremely bright, vivid, and colorful, bursting with neon tones and supernatural lighting effects. The cracked graffiti is seamlessly integrated into the design, enhancing the haunted look. The entire structure glows with surreal fantasy horror energy, transformed into a dazzling Halloween masterpiece.',
    pic_neg_prompt:
      'Phrases, words, text, garage, blank garage, text graffiti, dim, dull, pitch black, dark',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are cats surrounded by a swarm of bats with full moon in the background. The cats appears to purr and bats appear to flap their wings, even though it's a projection. The lighting is soft and foggy, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Cats Bats Overylay T.mov',
  },
  ghosts: {
    model_name: 'lumighost_halloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'Full nighttime photo of a Halloween-themed lumighost house only with neon outlines of the entire house. The entire facade and the roof is sullied with blue glowing slime, gnarly graffiti of ghosts straight from phonk videos framing the windows and eerie silhouettes on both the facade of the house and garage door. All artwork is set stylized drawings of the tombstones with glowing white moon. The graffities are bright, cold, have blurry silhouettes, oozing turquoize light and supernatural lighting effects. The cracked graffiti of tombstones is seamlessly integrated into the design, enhancing the haunted look. The entire structure glows with surreal fantasy horror energy, transformed into a creepy Halloween masterpiece.',
    pic_neg_prompt:
      'blank doors, blank garage, blank garage walls, dull, mundane, single color, empty walls, text graffiti',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are ghastly ghosts with eery white fog in the background. The ghosts appears to wobble slowly, even though it's a projection. The lighting is soft and cold, creating an eery and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Spooky Ghosts Overlay T.mov',
  },
  clowns: {
    model_name: 'luclownmi_halloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'the full photo of the luclownmi halloween house with detailed realistic portraits of clowns framing the windows and densely scattered across the house and the roof, 4k, vibrant colors, halloween clown house, detailed decorations, neon lighting, intricate details, blow up castle walls, circus decorations, neon outlines of the house, empty windows',
    pic_neg_prompt:
      'Phrases, words, text, blank doors, blank garage, blank garage walls, dull, mundane, single color, empty walls, text graffiti, inscryption, people in windows',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are heads of clowns laughing with carnival projectors in the background. The clowns appear to laugh, even though it's a projection. The lighting is soft and warm, creating a feverish and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Clowns Overlay.mov',
  },
  skeletons: {
    model_name: 'skelhouse_halloween_house.safetensors',
    pic_pos_prompt:
      'the full photo of the skelhouse halloween house with detailed full body gnarly graffiti of skeletons framing the windows on the facade and garage door of the house and the roof, detailed vibrant graffiti of skeleton on the walls of the house, full body skeleton graffiti on the walls, vibrant halloween decorations, all facade is covered by graffiti, garage doors are covered by graffiti,  neon lighting, nighttime photo',
    pic_neg_prompt:
      'blank doors, blank garage, blank garage walls, dull, mundane, single color, empty walls, text graffiti',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are cartoonish skeletons dancing with warping ornaments in the background. The skeletons appear to dance, even though it's a projection. The lighting is sharp and cold, creating a creepy and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Skeletons Overlay.mov',
  },
  bunnies_and_eggs: {
    model_name: 'east3rlumi_easter_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'the full photo of the east3rlumi easter ultradetailed decorated house, the house facade is fully covered with hyper-detailed full body graffiti of cheerful easter bunnies in various joyful poses, all exterior walls are entirely painted with colorful cartoon-style easter bunnies holding baskets, jumping, painting eggs, and smiling, surrounded by ultra-vibrant easter eggs with intricate floral and geometric ornaments, glowing under bright neon lighting in pastel tones, the entire building looks like a glowing easter wonderland, hyper-realistic textures, rich colors, massive bunny murals, playful and magical atmosphere, every inch of the house is bursting with holiday spirit',
    pic_neg_prompt:
      'Phrases, words, text, blank doors, blank garage, blank garage walls, dull, mundane, single color, empty walls, text graffiti',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are cheerful full body murals of easter bunnies with bow ties with huge easter eggs in the background. The bunnies appear to hop around, even though it's a projection. The lighting is soft and warm, creating a cheerful and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  bunnies_floral: {
    model_name: 'flowerabbnex_easter_floral_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "A full photo of the flowerabbnex Easter ultra-decorated house. The entire facade of the house is completely covered with hyper-detailed, full-body graffiti murals. At the center of the mural stands a single, large, highly detailed Easter Bunny, cheerful and expressive, with plush, velvety fur in soft white and pastel beige tones. One paw waves while the other holds a brightly decorated egg. Around his feet lie more painted eggs nestled in grass. Surrounding the bunny and covering the entire house facade are enormous, oversized spring flowers in ultra-vibrant colors ' towering tulips, gigantic daisies, huge daffodils, and blooming wildflowers. The flowers are the dominant feature of the mural, visually overwhelming the composition with vivid beauty, while the lone Easter Bunny adds character and charm to the vibrant floral scene. Scattered among the flowers are also colorful, hand-painted Easter eggs, adding playful accents without overpowering the majestic flowers.",
    pic_neg_prompt: 'Phrases, words, text, blank garage',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a huge full body cheerful mural of an easter bunny holding a decorated egg with lavish big flowers ornaments in the background. The bunny appears to smile, even though it's a projection. The lighting is soft and warm, creating a cheerful and celebratory atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  bunnies_chicks_baskets: {
    model_name: 'chickbasketnex_easter_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'A chickbasketnex highly detailed, ultra high-resolution (4K) family-friendly Easter-themed graffiti mural covering the entire exterior of a typical American suburban house. Every inch of the house is completely covered with vibrant, whimsical, and intricately detailed graffiti art. The mural features a cute cartoon bunny holding a beautifully decorated Easter egg, surrounded by smiling fluffy chicks, pastel-colored eggs, and colorful Easter baskets filled with ribbons, candies, and little surprises. The entire mural is full of tiny, charming elements like butterflies, ladybugs, small flowers, hidden animals, and decorative patterns on every surface. In the background of the mural, behind the Easter characters, is a vivid and dreamy landscape of blooming flower fields under a sunny sky, with rolling hills and soft, glowing light, adding depth and a joyful springtime atmosphere to the scene. The house appears clean, cheerful, and fully immersed in the festive spirit of Easter.',
    pic_neg_prompt: 'Phrases, words, text, garage, door',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is huge full body cheerful cute cartoon bunny holding a beautifully decorated Easter egg with fluffy chicks, pastel-colored eggs, and colorful Easter baskets filled with ribbons and candies in the background. The bunny appears to smile, even though it's a projection. The lighting is soft and warm, creating a cheerful and celebratory atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  leprechaun_v1: {
    model_name: 'patricklumi_st_patrick_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "patricklumi st. Patrick's overdecorated house with big leprechaun graffiti with high quality face and non-distorted anatomy on the wall, other walls are covered by a lot of vibrant four-leafed clovers graffiti, cartoon style, overdecorated, vibrant green and rainbow neon, holiday",
    pic_neg_prompt:
      'Phrases, words, text, smudgy, blank walls, bad anatomy, blurry faces and bodies, deformed features, low-resolution textures, text, logos, watermarks',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is huge full body cheerful stylized graffiti of a leperchaun with a mischievous, expressive leprechaun face, sparkling emerald leprechaun eyes, a bold, captivating smile, an intricately designed, artfully tousled leprechaun beard, and a bright, elaborately patterned green top hat with bright green four-leafed clovers in the background. The leperchaun appears to dance, even though it's a projection. The lighting is soft and warm, creating a cheerful and celebratory atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  leprechaun_v2: {
    model_name: 'patricklumi_st_patrick_decorated_house_v2.safetensors',
    pic_pos_prompt:
      "A super detailed, vibrant neon patricklumi graffiti mural covering every inch of the exterior walls of a house, featuring one exceptionally detailed big and huge leprechaun as the centerpiece, with a mischievous, expressive leprechaun face, sparkling emerald leprechaun eyes, a bold, captivating smile, an intricately designed, artfully tousled leprechaun beard, and a bright, elaborately patterned green top hat, surrounded by radiant, cascading rainbows, and an abundance of glittering, gold and green four-leaf clovers meticulously arranged to avoid overlapping windows and doors, all composed in a continuous, immersive scene rendered in a whimsical, patricklumi neon style, bursting with festive energy, precise detail, and fluid motion, further enriched by a distinct, patricklumi creative flair that transforms every element into a vibrant celebration of St Patrick's spirit, where the leprechaun, stands out with unparalleled character and charm, and every stroke, hue, and shadow contributes to an overall dynamic, captivating masterpiece of urban street art",
    pic_neg_prompt:
      'Phrases, words, text, smudgy, blank walls, bad anatomy, no person',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is huge full body cheerful stylized graffiti of a leperchaun with a mischievous, expressive leprechaun face, sparkling emerald leprechaun eyes, a bold, captivating smile, an intricately designed, artfully tousled leprechaun beard, and a bright, elaborately patterned green top hat with radiant, cascading rainbows, and an abundance of glittering, gold and green four-leaf clovers meticulously arranged to avoid overlapping windows and doors, all composed in a continuous, immersive scene in the background. The leperchaun appears to dance, even though it's a projection. The lighting is soft and warm, creating a cheerful and celebratory atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: '',
  },
  santa_and_raindeers: {
    model_name:
      'raindeersantalumi_raindeers_santa_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "raindeersantalumi New Year decorated house fully covered in vibrant, neon-style graffiti murals, leaving no blank spaces, featuring a highly detailed cartoon Santa Claus sitting in an ornate golden sleigh, wearing a bright red suit with white fur trim, holding reins in one hand, waving joyfully with the other, sleigh overflowing with colorful wrapped presents, deep blue night sky background with glowing white stars and swirling snowflakes, **the sleigh and reindeer must be seamlessly painted as a single unified mural on the wall, fully integrated into the design, appearing as one continuous composition**, directly in front of the sleigh and always positioned ahead of it, without exception, are 4 reindeer **drawn directly on the wall right in front of the sleigh, harnessed to it, never separate, never detached, ensuring they form a single, cohesive scene**, dynamically posed mid-gallop as if pulling it forward, their glowing red noses shining brightly, each reindeer adorned with festive red and gold harnesses decorated with jingling bells, **both the sleigh and reindeer must always face the same direction, maintaining a clear sense of motion and perspective, ensuring they move as one towards a single focal point**, the positioning of the reindeer is absolute and unchanging'they must always be leading the sleigh from the front, never beside it, never behind it, reinforcing the natural and logical motion of the scene, surrounding the main mural are neon-style graffiti of oversized Christmas gifts wrapped in shiny red, green, and gold, giant glossy red-and-white candy canes, multicolored swirled lollipops, smiling gingerbread cookies, glowing cartoon Christmas trees in varied sizes, bright green with twinkling ornaments, arranged to fit around windows and doors, raindeersantalumi New Year decorated house outlined with bright Christmas lights in blue, red, green, and white, graffiti seamlessly wrapping around the entire architecture, extending onto the roof, making raindeersantalumi New Year decorated house an immersive, glowing holiday masterpiece.",
    pic_neg_prompt: '',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a festive mural of the Santa in a sleigh with reindeers reigned in the slaigh and with stylized swirls of snow in the background. The deers appear to rise their heads slowly, even though it's a projection. The lighting is soft and warm, creating a homely and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: "Santa's Sleigh Overlay.mov",
  },
  raindeer_snowflakes: {
    model_name: 'raindeertwolumi_christmas_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "A full photo of a raindeertwolumi Christmas-decorated house fully covered in a vibrant blue lightning-themed mural. The mural features a very large, majestic reindeer positioned prominently on the largest free space of the facade. The reindeer is drawn in a cartoony, animated style, with big expressive eyes, a joyful smile, and exaggerated, rounded features that give it a playful and heartwarming look'resembling a character from a holiday cartoon. It stands confidently on four legs, surrounded by elegant, swirling ornaments and symmetrical christmas patterns. The overall design transforms the entire house into a lively, storybook-like Christmas scene.",
    pic_neg_prompt: 'Phrases, words, text, blank garage, unpainted garage',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a festive mural of a reindeer with stylized swirls of snow in the background. The deer appears to rise his front right leg slowly while keeping his front left leg on the ground, even though it's a projection. The lighting is soft and warm, creating a homely and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Blitzen Boulevard Overlay.mov',
  },
  gingerbread: {
    model_name: 'gingerlumi_christmas_decorated_house_v1.safetensors',
    pic_pos_prompt:
      "A gingerlumi decorated house fully completely covered with a vibrant neon Christmas mural. The mural depicts three small intricately detailed gingerbread men with glossy icing patterns and candy-button eyes. This gingerbread men are standing across all the facade, and they are appearing on the largest blank surface. Surrounding them are lush evergreen trees decked with colorful ornaments on the mural, twinkling string lights, oversized candy canes, and frosted holly branches. The mural's background is fully filled with a very vibrant red cozy gradient. Snowflakes are covering blank spaces on the facade. A glowing neon outline runs under the eaves of the roof, casting warm ambient reflections over the entire mural scene.",
    pic_neg_prompt: 'Phrases, words, text, blank garage, smudgy, blurry',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a festive mural of gingerbread men with red satin and present boxes in the background. The gingerbread men appear to waltz to the right, even though it's a projection. The lighting is soft and warm, creating a cheerful and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backward',
    model_type: 'flux',
    overlay: 'Gingerbread Overlay.mov',
  },
  zombie_silhouettes: {
    model_name: 'sillumi_halloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'A sillumi decorated house featuring a striking mural that covers every structure and garage door and the roof, depicting a nighttime scene with a large, glowing moon in a starry sky. Silhouetted against the blue moon are several zombies reaching out with their hands, exhibiting eerie postures and expressions. The base of the mural presents a graveyard filled with tombstones and wild grass, creating a spooky atmosphere. Bats are flying across the sky, and the windows of the sillumi decorated house glow warmly, contrasting with the dark themes of the artwork.',
    pic_neg_prompt:
      'Phrases, words, text, blurry image, blurry, smudgy, blank walls, blank garage, dull, mundane, single color, empty walls',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are creepy silhouettes of tarnished zombies with crumbling tombstones and eery fog in the background. The silhouettes appear to shamble towards the viewer, even though it's a projection. The lighting is blurry and cold, creating a cheerful and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'flux',
    overlay: 'Zombies Overylay.mov',
  },
  old_raindeer: {
    model_name: 'deerv1_deer_house.safetensors',
    pic_pos_prompt:
      'full photo of an exterior of christmas decorated house with big graffiti of reindeer on it, swirling ornaments, neon lighting, symmetrical ornaments, textured wall <lora:deerv1_deer_house:1>',
    pic_neg_prompt:
      'Phrases, words, text, inscription, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is big festive tribal mural of a reindeer with swirling white and blue winter ornaments in the background. The deer appears to move his front legs, even though it's a projection. The lighting is blurry and cold, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Cotton Candy christmas Overlay.mov',
  },
  old_santa_house_black_v3: {
    model_name: 'santablackv2_santa_house.safetensors',
    pic_pos_prompt:
      'full photo of an exterior of christmas decorated house with big graffiti of santa on it, , swirling ornaments, neon lighting on black walls, symmetrical ornaments, textured wall, <lora:santablackv2_santa_house:1>, santa house, red bow, red band',
    pic_neg_prompt:
      'Phrases, words, text, text, abstract ornaments, overlapping on windows, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is huge full body mural of a Santa Claus with festive white ornaments on the black background. The Santa Claus appears to smile, even though it's a projection. The lighting is soft and warm, creating a cheerful and festive atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Ole Saint Nick Overlay.mov',
  },
  old_santa_house_black_v2: {
    model_name: 'santablackv2_santa_house.safetensors',
    pic_pos_prompt:
      'full photo of an exterior of christmas decorated house with big graffiti of santa on it, , swirling ornaments, neon lighting on black walls, symmetrical ornaments, textured wall, <lora:santablackv2_santa_house:1>, santa house',
    pic_neg_prompt:
      'Phrases, words, text, abstract ornaments, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is huge full body mural of a Santa Claus with festive white ornaments on the black background. The Santa Claus appears to smile, even though it's a projection. The lighting is soft and warm, creating a cheerful and festive atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Jingle Bell Rock Overlay.mov',
  },
  old_santa_house_v2: {
    model_name: 'santav3_santa.safetensors',
    pic_pos_prompt:
      '<lora:santav3_santa:1>, full photo of a christmas decorated house with big graffiti of santa on it, , swirling ornaments, red and blue neon lighting',
    pic_neg_prompt:
      'Phrases, words, text, green, text, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is huge full body mural of a Santa Claus with festive white ornaments on the red and blue background. The Santa Claus appears to smile, even though it's a projection. The lighting is soft and warm, creating a cheerful and festive atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Sanata Overlay.mov',
  },
  old_valentine: {
    model_name: 'valv6_st_valentine_house.safetensors',
    pic_pos_prompt:
      "full photo of a st valentine's day decorated house with heart and cupid graffiti, intense decorations, intense decorations, highly detailed, <lora:valv6_st_valentine_house:1>",
    pic_neg_prompt:
      'Phrases, words, text, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house are festive graffiti of cupids with graffiti of roses and hearts in the background. The cupids appears to aim their bows, even though it's a projection. The lighting is soft and warm, creating a cheerful and festive atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: '',
  },
  old_halloween_witches: {
    model_name: 'Halloween.safetensors',
    pic_pos_prompt:
      'the full photo of the halloween house with heavily stylized graffities of witches on the house and the roof, detailed gnarly graffities of witches on the walls of the house, detailed witches graffiti, halloween decorations, highly detailed 3d graffiti of witches, 4k, vibrant colors, halloween witch house, <lora:wichouse:1>',
    pic_neg_prompt:
      'Phrases, words, text, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped, unfinished decorations, morphed, windows, doors, white witches',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a gnarly graffiti of witches grinning with violet fog and orange lights in the background. The witches appear to grin, even though it's a projection. The lighting is soft and cold, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Purple Witch Overlays.mov',
  },
  old_halloween_cats: {
    model_name: 'Halloween.safetensors',
    pic_pos_prompt:
      "the full photo of the halloween house with gnarly graffiti of black cats framing the windows and scattered on the facade of the house and the garage door and the roof, detailed pictures of cats on the walls of the house, cats graffiti, the house's walls are orange and purple, halloween decorations,orange and purple neon colors, 4k, vibrant colors, <lora:wichouse:1>",
    pic_neg_prompt:
      'Phrases, words, text, blank walls, wooden planks, empty garage door, blank garage door, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped, new windows, doors, white cats, black grey dark colored walls',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a minimalistic graffiti of cats and pumpkins with bright full moon the grey sky in the background. The cats appear to lick their paws, even though it's a projection. The lighting is soft and cold, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Overlay Cats and Bats.mov',
  },
  old_halloween_witches1: {
    model_name: 'Halloween.safetensors',
    pic_pos_prompt:
      "the full photo of the halloween house at night with detailed realistic portraits of witches on it, big witch portrait, big witch face, 4k, vibrant colors, halloween witch house,the house's walls are orange and purple ,<lora:wichouse:1>, hyper-realistic, grimy portraits of witches, bright neon lighting, very detailed",
    pic_neg_prompt:
      'Phrases, words, text, blank walls, wooden planks, empty garage door, blank garage door, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped, small witches, windows, doors, big pumpkins, big jack-o-lanterns, white witches, black dark grey walls',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a gnarly graffiti of witches grinning with violet fog and orange lights in the background. The witches appear to grin, even though it's a projection. The lighting is soft and cold, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Witch 1 Overlay.mov',
  },
  old_halloween_witches2: {
    model_name: 'Halloween.safetensors',
    pic_pos_prompt:
      'the full photo of the halloween house at night with detailed realistic graffiti of witches on the house and the roof, 4k, vibrant colors, halloween witch house, <lora:wichouse:1>, grimy graffiti of witches, bright neon lighting, very detailed, witchhouse, swirling ornaments',
    pic_neg_prompt:
      'Phrases, words, text, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped, text, letters, inscryptions, words, phrases',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a gnarly graffiti of witches grinning with violet fog and orange lights in the background. The witches appear to grin, even though it's a projection. The lighting is soft and cold, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Purple Witch Overlays.mov',
  },
  old_halloween_clowns: {
    model_name: 'clownhouse.safetensors',
    pic_pos_prompt:
      'the full photo of the halloween house with detailed realistic portraits of clowns on it, 4k, vibrant colors, halloween clown house, <lora:clownhouse:1>, detailed decorations, neon lighting, intricate details, nuanced decorations',
    pic_neg_prompt:
      'Phrases, words, text, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a gnarly graffiti of clowns grinning predatorily with bright carnival decoration in the background. The clowns appear to laugh hysterically, even though it's a projection. The lighting is soft and cold, creating a feverish and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Clowns Overlay.mov',
  },
  old_halloween_ghosts: {
    model_name: 'ghosthousev2_ghost_house.safetensors',
    pic_pos_prompt:
      'the full photo of the ghosthousev2 ghost house at night sullied with blue glowing slime with pictures of ghosts framing the windows on the walls of the house and the garage door and the roof, detailed graffiti of ghosts on the walls of the house, ghosts graffiti, pictures of the tombstones on the house, halloween decorations, <lora:ghosthousev2_ghost_house:1>, gnarly graffiti of ghost, Within the contours of the house, a dense graffiti with variety of different highly detailed cartoon ghosts characters in different poses covering every available space on the walls, doors and garage doors',
    pic_neg_prompt:
      'Phrases, words, text, blank wall, empty space, asymmetrical ornaments, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt:
      "Generate a video of a static shot of a typical suburban house at twilight. The house is two stories with a well-manicured lawn. Projected onto the front of the house is a gnarly graffiti of ghosts wallowing with grey crumbling walls in the background. The ghosts appear to shimmer, even though it's a projection. The lighting is soft and cold, creating a mysterious and slightly surreal atmosphere. The shot is static, with no camera movement. The style is realistic and detailed. Static shot from neighbour's house. Also no camera zoom or panning. Whole video seems like being filmed from static camera.",
    vid_neg_prompt:
      'bright colors, overexposed, static, blurred details, subtitles, style, artwork, painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, incomplete, extra fingers, poorly drawn hands, poorly drawn faces, deformed, disfigured, malformed limbs, fused fingers, still picture, cluttered background, three legs, many people in the background, walking backwards',
    model_type: 'sdxl',
    overlay: 'Spooky Ghosts Overlay T.mov',
  },
  spookytrio_frankenguy: {
    model_name: 'frankenguy_haloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'The full photo of frankenguy haloween decorated house, on it a projection mapping style of a highly detailed cute Pixar style Frankenstein. The rest of the walls are fully painted in swirling neon colors, covered with vivid neon roof lights, playful halloween decorations of bats and cobwebs, neon lighting, nighttime photo',
    pic_neg_prompt: 'Phrases, words, text, blank garage, blank walls',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: '',
  },
  spookytrio_pixiewitch: {
    model_name: 'pixywitch_haloween_decorated_house_V1.safetensors',
    pic_pos_prompt:
      'The full photo of pixywitch haloween decorated house, on it a projection mapping style of a highly detailed cute Pixar style witch. The rest of the walls are fully painted in swirling neon colors, covered with vivid neon roof lights, playful halloween decorations of bats and cobwebs, neon lighting, nighttime photo',
    pic_neg_prompt: 'Phrases, words, text, blank garage, blank walls',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: '',
  },
  spookytrio_dracuguy: {
    model_name: 'dracuguy_haloween_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'The full photo of dracuguy haloween decorated house, on it a projection mapping style of a highly detailed Pixar style cute cartoon Dracula, projected on garage door. The rest of the walls are fully painted in swirling neon colors, covered with vivid neon roof lights, playful halloween decorations of bats and cobwebs, neon lighting, nighttime photo',
    pic_neg_prompt: 'Phrases, words, text, blank garage, blank walls',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: '',
  },
  grinch_with_dog: {
    model_name: 'grinchdog_grinch_house.safetensors',
    pic_pos_prompt:
      'full photo of an exterior of christmas decorated house with big graffiti of grinch on it and big graffiti of a dog on it, swirling ornaments, neon lighting on blue walls, symmetrical ornaments, textured wall, graffiti of a dog with a horn tied to its head, <lora:grinchdog_grinch_house:1>, grinch house',
    pic_neg_prompt:
      'Phrases, words, text, empty wall, blank walltext, empty wall, blank wall ',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'sdxl',
    overlay: 'Gingerbread Overlay.mov',
  },
  santa_aurora: {
    model_name: 'auroralumi_christmas_decorated_house_v2.safetensors',
    pic_pos_prompt:
      'A vibrant auroralumi decorated house fully covered with a whimsical Christmas mural. A very Big Santa Claus stands on the largest blank area, smiling warmly and holding a red-and-white candy cane. He wears a glowing red suit with white fur trim, black boots, a golden-buckled belt, and a pom-pom hat. His face has rosy cheeks, twinkling eyes, and a white beard. The mural includes lush Christmas trees along the bottom, colorful ornaments, twinkling lights, and vividly wrapped presents on the mural. Northern lights are also on the facade. A big blue neon outline traces the roofline.',
    pic_neg_prompt:
      'Phrases, words, text, blank garage, smudgy, blurry, garage',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: 'Gingerbread Overlay.mov',
  },
  new_santa: {
    model_name: 'nexsanta_santa_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'A vibrant nexsanta New Year house completely covered in neon, cartoon-style Christmas graffiti. The main wall showcases a playful Santa with a big belly, rosy cheeks, twinkling eyes, a fluffy beard, and a red-and-white outfit accented with neon lines, holding an overflowing sack of gifts and sweets. Surrounding him, smaller neon designs of presents, candy canes, lollipops, and cheerful Christmas trees fill every available wall space while avoiding windows, doors, and the roof.',
    pic_neg_prompt: 'Phrases, words, text, text on walls, blank walls',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: 'Gingerbread Overlay.mov',
  },
  new_elf: {
    model_name: 'elflumi_christmas_decorated_house_v1.safetensors',
    pic_pos_prompt:
      'elflumi house with a vibrant graffiti completely covering every visible surface. The graffiti features one large elf with cheerful young face, a lot of present boxes around him on the walls, and snowflakes. The background of graffiti is a vivid red-and-light-blue gradientelflumi house with a vibrant graffiti completely covering every visible surface. The graffiti features one large elf with cheerful young face, a lot of present boxes around him on the walls, and snowflakes. The background of graffiti is a vivid red-and-light-blue gradient',
    pic_neg_prompt: 'Phrases, words, text',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: 'Gingerbread Overlay.mov',
  },
  nightmare_before_christmas: {
    model_name: 'nbc_haloween_house_V1.safetensors',
    pic_pos_prompt:
      'nbc haloween house featuring striking highly detailed projection full body shot of two main characters Jack Skellington and ragdoll-like Sally, positioned inteligently on the free spaces of the walls and garage doors, popping out. skeleton-like figure Jack Skellington and ragdoll-like figure Sally on the nbc haloween house in striking poses, full body shot. The background covers every inch of the left space on the walls with a spooky town. Nighttime photo, highly deatilled characters, vivid colors.',
    pic_neg_prompt:
      'blank garage door, blank walls, realistic wall texture, plain walls, single character, mixed feature character, multiple moons, many moons, two moons, epmty garage door, empty space, lanterns, lights, filled in wondow, colored windows',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: 'Gingerbread Overlay.mov',
  },
  new_grinch: {
    model_name: 'lumigrinch_christmass_presents_grinch_v1.safetensors',
    pic_pos_prompt:
      'full photo of a christmas decorated lumigrinch house with graffiti of full body grinch and christmas decorations on the walls of the house. Big detailed body of Grinch drawn on the buildings walls. There are stylized drawn snowflakes candies gifts and various christmass decorations on the neon blue walls. Walls filled with drawings of snowflakes presents and candy canes. Drawings of gifts are scatered near the bottom of the house. Snow falling across whole building. Big full body grinch on the garage in santa clothes with santa bag, detailed. graffiti of candy canes and various christmas elements on the walls on an empty spaces. neon lights. Christmas decorations painted on the garage doors and house walls. The rest of the walls are fully painted in swirling neon blue and white colors, covered with vivid neon roof lights, playful christmas decorations of snowflakes and candy canes, swirling ornaments, neon lighting, nighttime photo, textured walls. Whole building is scatered with pictures of gifts and christmas candies',
    pic_neg_prompt:
      'Phrases, words, text, blank wall, empty space, abstract, blurry, bad anatomy, wrong anatomy, warped',
    vid_pos_prompt: 'abc',
    vid_neg_prompt: 'abc',
    model_type: 'flux',
    overlay: 'Gingerbread Overlay.mov',
  },
  '': {
    model_name: '.safetensors',
    pic_pos_prompt: '',
    pic_neg_prompt: 'Phrases, words, text, ',
    vid_pos_prompt: '',
    vid_neg_prompt: '',
    model_type: 'modeltype',
    overlay: '',
  },
};

(async () => {
  console.log(Object.keys(data));
})();
