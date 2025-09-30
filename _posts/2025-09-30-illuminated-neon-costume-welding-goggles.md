---
title: Illuminated "neon" costume welding goggles
tags: electronics 3d_printing sewing
eye-cup-holes:
  [
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "type": "Annotation",
      "body":
        [
          {
            "type": "TextualBody",
            "value": "Marked indents to prepare for drilling",
            "purpose": "commenting",
          },
        ],
      "target":
        {
          "source": "https://thzinc.com/2025/09/30/tbd.html#assets-led-goggles-eye-cup-holes-dzi",
          "selector":
            {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": "xywh=pixel:2287.5498046875,1589.130126953125,559.653564453125,903.005859375",
            },
        },
      "id": "#2541ec05-63cb-41ec-95c0-3f7e009ba964",
    },
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "type": "Annotation",
      "body":
        [
          {
            "type": "TextualBody",
            "value": "Compass with needle points set about 10mm apart",
            "purpose": "commenting",
          },
        ],
      "target":
        {
          "source": "https://thzinc.com/2025/09/30/tbd.html#assets-led-goggles-eye-cup-holes-dzi",
          "selector":
            {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": "xywh=pixel:1634.0911865234375,0,1288.6951904296875,2051.194091796875",
            },
        },
      "id": "#25d768e6-5ccb-4b78-83f2-53a8276e7565",
    },
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "type": "Annotation",
      "body":
        [
          {
            "type": "TextualBody",
            "value": "Awl used for widening the markings left by the compass",
            "purpose": "commenting",
          },
        ],
      "target":
        {
          "source": "https://thzinc.com/2025/09/30/tbd.html#assets-led-goggles-eye-cup-holes-dzi",
          "selector":
            {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": "xywh=pixel:625.38916015625,0,947.5477294921875,2384.8251953125",
            },
        },
      "id": "#237e6f43-0538-40dd-98f9-32ef726e14fd",
    },
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "type": "Annotation",
      "body":
        [
          {
            "type": "TextualBody",
            "value": '1/16" drill bit deep inside the chuck to minimize the amount of drill bit that would protrude into the eye cup',
            "purpose": "commenting",
          },
        ],
      "target":
        {
          "source": "https://thzinc.com/2025/09/30/tbd.html#assets-led-goggles-eye-cup-holes-dzi",
          "selector":
            {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": "xywh=pixel:1615.838134765625,4043.56982421875,546.500732421875,709.7978515625",
            },
        },
      "id": "#97c41ad4-f9a1-4928-99e3-c9eba700f36b",
    },
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "type": "Annotation",
      "body":
        [
          {
            "type": "TextualBody",
            "value": "Larger drill bit used for deburring the drilled holes",
            "purpose": "commenting",
          },
        ],
      "target":
        {
          "source": "https://thzinc.com/2025/09/30/tbd.html#assets-led-goggles-eye-cup-holes-dzi",
          "selector":
            {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": "xywh=pixel:1149.897216796875,3028.950927734375,559.564453125,2606.220947265625",
            },
        },
      "id": "#11bd9282-98c9-497e-943a-ffe8b8e0ca5f",
    },
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "type": "Annotation",
      "body":
        [
          {
            "type": "TextualBody",
            "value": "Drilled holes along the rim of the eye cup",
            "purpose": "commenting",
          },
        ],
      "target":
        {
          "source": "https://thzinc.com/2025/09/30/tbd.html#assets-led-goggles-eye-cup-holes-dzi",
          "selector":
            {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": "xywh=pixel:1883.645263671875,5160.521484375,452.877197265625,805.59912109375",
            },
        },
      "id": "#01f06537-b75f-45ee-adca-d9983343f2fb",
    },
  ]
---

Many years ago, I bought a two-pack of costume welding goggles for a steampunk-adjacent cosplay on a [JoCoCruise]. The goggles are fun, but weren't made for wearing for any real length of time because the nose rest was the same rigid plastic as the rest of the eye cups. As I was making plans for this year's [Supercon], I wanted to revisit the goggles with some electronics.

![Photo of me on JoCoCruise wearing a long coat and a leather top hat with welding goggles strapped around the brim. The goggles are comprised of two eye cups made of cylinders with ~50mm round lenses joined by a simple flexible plastic strip across the nose. The setting is a fancy central section of a cruise ship.](/assets/led-goggles/jococruise-selfie.jpg)

The goggles have a screw-on retaining ring to secure a stack of 50mm glass lenses to the eye cup. The eye cup has a relatively large volume of space to work within, so I figured I could print an insert could hold some LEDs and a battery—then I remembered I had some [nOOds LED chip-on-board (COB) strands][tensegrity] that I could snake around in an interesting pattern. I briefly thought about including a microcontroller, but didn't feel like I could make much use of it in the space I had without including at least a second LED strand.

However, I wanted to make sure I wasn't going to regret wearing the goggles for a decent length of time, so I go to work hand-stitching some padding around the eye cups. I marked and drilled small holes along the rims of the eye cups spaced roughly 10mm apart.

{% include annotated_image.html tile_sources = "/assets/led-goggles/eye-cup-holes.dzi" annotations = page.eye-cup-holes alt = "Diptych of eye cups with markings and with holes drilled"%}

I went to my box of fabric and found a microfiber lens cleaning cloth and a sheet of felt. I estimated I'd need about 25mm strips to work with around the rim of the eye cups, so I cut the fabric and used a school glue stick to temporarily bind the two layers together.

![Photo of microfiber cloth cut into 25mm strips. A rotary cutting tool is visible in the background.](/assets/led-goggles/microfiber-cloth.jpg)

After having an absolutely awful time hand-stitching for the first time, fighting to keep tension and also hold the fabric in place, I realized that I should first pin the fabric in place. This resulted in a _much_ more consistent stitch, though I'm still very slow at it. Also, microfiber cloth is tricky to poke a needle through.

![Photo of goggles on a mat. The left eye cup is pinned with all of the points radiating outward. The right eye cup is stitched, but the stitching is inconsistent.](/assets/led-goggles/pinned-padding.jpg)

![Photo of goggles with completed stitching around both eye cups. The stitching around the left eye cup is visibly better than the right eye cup.](/assets/led-goggles/stitched-padding.jpg)

The padding around the eye cups made a huge impact on comfort, so I got to designing an insert for the LED strand. Since I had 300mm strands and roughly a circle of 50mm diameter to work with, I couldn't quite loop the strand twice. (50mm diameter times π = ~157mm) I figured it would be neat to fashion something that looked vaguely like cartoon eyelids. After drawing what looked like series of sacred geometries, I printed a prototype and did a test fit.

![Diagram of many concentric circles with five sets of smaller concentric circles. It is not readily apparent where the channels for the LED strand are.](/assets/led-goggles/sacred-geometries.png)

![Photo of prototype fitted in the right eye cup with the LED strand illuminated. In the background are wires leading to a small breadboard (Jumperless V5) and strips of resistors.](/assets/led-goggles/prototype-fitted.jpg)

The prototype was useful to help me realize I needed make the outer ring LED strip smaller to be visible through the retaining ring. Also, I placed the throughhole in the thin edge of the design, which didn't make use of the room behind the "top eyelid" of the design. I made some adjustments to the design, and then designed a cup to contain the ends of the strand and a resistor, and a bottom alignment block to allow the piece to sit centered in the cylinder of the eye cup.

![Diagram of three-piece assembly. The 50mm ring has shallow holes that accept pegs from the other two pieces for alignment and strength.](/assets/led-goggles/assembly-diagram.png){:.invertable}

After some light soldering to attach the LED strand to a 22 Ohm resistor and a length of flexible wire, I fed the wire through a hole in the cup, stuffed the LED strand and resistor inside the cup, and plastic welded the cup to the ring. (I welded the the bottom alignment block as well.)

![Photo of back of ring with welded cup and alignment block. The weld lines are visible up close, but are unobtrusive. The wire is protruding from a snug hole in the cup.](/assets/led-goggles/welded.jpg)

I soldered the wire to a CR2032 battery holder with just enough slack to fit the holder in the side of the eye cup. I used double-sided foam tape to affix the holder to the inside wall.

![Photo of assembled ring and batter holder with the LED strip illuminated.](/assets/led-goggles/assembled-ring.jpg)

![Photo looking inside the eye cup at the battery holder affixed inside the edge of the eye cup. It is placed near the strap and fits with very little extra room, but is completely out of the field of vision.](/assets/led-goggles/affixed-battery-holder.jpg)

With the batteries installed, I put the goggles on and was chuffed! They're fun to wear, and they look good whether on my face, my forehead, or my leather top hat.

![Photo of completed illuminated goggles sitting on a table](/assets/led-goggles/completed.jpg)

![Selfie wearing the illuminated goggles making a silly face with my mouth open and lips curled in.](/assets/led-goggles/selfie.jpg)

![Photo of top hat with illuminated goggles around the brim sitting on a cylindrical stand.](/assets/led-goggles/on-a-hat.jpg)

[jococruise]: https://jococruise.com
[supercon]: https://hackaday.io/superconference/

[tensegrity]: {% post_url 2025-01-03-illuminated-neon-tensegrity-table-desk-toy %}
