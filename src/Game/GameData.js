const gameData = {
	desciption: 'a villain, the main character, wants to destroy the world for some reason and superheroes wants to stop him.',
    title: 'Dreadlord Nexus',
	mainCharacterDeathScene: 'With a final, rattling breath, Dreadlord Nexus watched as the energy he had sought to control spiraled out of his grasp, the chaotic forces tearing him apart from the inside out. His last thought was a bitter realization that even in destruction, he was merely a vessel.',
    chapters:[
        {
            text: "Born into a society that celebrated conformity and suppressed individuality, Kael felt like a glitch in the system. His unique talents and perspectives were met with fear and rejection. Witnessing the systematic crushing of creativity and the blind obedience to flawed leaders, he concluded that the world itself was fundamentally broken. He resolved to shatter this stagnant reality and build a new one from the ashes, a world where true potential could flourish, even if it meant a painful reset.",
            goto: "next"
        },
        {
            text: "Across the shattered skyline, Spider-Man landed with a thud, his eyes narrowed behind his mask. 'Nexus!' he called out, his voice strained with urgency. 'Stop this madness! There's still time to change!' Dreadlord Nexus floated above the destruction, a malevolent grin spreading across his face. 'Change? Little spider, this world is beyond saving. Only through its annihilation can true order be established.'",
            fight: {
				opponentAtackPower: 8,
                rounds: [
                    {
                        attack_options: [
                            { name: 'Web Swing Kick (A swift kick delivered while swinging)', sucess: false, outcome: 'Nexus swats Spider-Man away with a telekinetic blast. Spider-Man stumbles back, taking 8 damage.' },
							{ name: 'Web Line Trip (A quick web line aimed at the legs)', sucess: false, outcome: 'Nexus phases through the web line, a dark energy aura shimmering around him. He retaliates with a shadowy tendril, striking Spider-Man for 8 damage.' },
							{ name: 'Sticky Web Grenade (A small grenade that releases a large amount of sticky webbing)', sucess: true, outcome: 'The web grenade explodes, encasing Nexus in a thick layer of webbing, momentarily immobilizing him.' },
							{ name: 'Spider-Sense Dodge (Reacting to an incoming attack with agility)', sucess: true, outcome: 'Spider-Man\'s senses tingle, allowing him to narrowly evade a blast of dark energy.' }
						],
                    }
                ]
            },
            goto: "next"
        },
        {
            text: "Iron Man descended in a blaze of repulsor fire, landing heavily before Dreadlord Nexus. 'Nexus,' Tony Stark's voice echoed through his helmet, 'your little tantrum ends now. Stand down.' Nexus simply tilted his head, a cold amusement in his eyes. 'Stark, you mistake a necessary evolution for a tantrum. This world is a flawed design, and I am the architect of its correction.'",
            fight: {
				opponentAtackPower: 9,
                rounds: [
                    {
                        attack_options: [
                            { name: 'Repulsor Blast (A focused energy beam from the gauntlets)', sucess: true, outcome: 'A powerful repulsor blast strikes Nexus, forcing him to shield himself with a dark energy barrier.' },
							{ name: 'Flight Maneuver (Quickly dodging an attack using the suit\'s thrusters)', sucess: true, outcome: 'Iron Man boosts away, narrowly avoiding a wave of destructive energy.' },
							{ name: 'Unibeam (A powerful energy beam from the chest arc reactor)', sucess: false, outcome: 'Nexus telekinetically redirects the Unibeam, causing it to strike a nearby vehicle. He then unleashes a barrage of dark energy shards, hitting Iron Man for 9 damage.' },
							{ name: 'Energy Shield (Deploying a personal energy shield)', sucess: false, outcome: 'Nexus unleashes a concentrated blast of chaotic energy that overwhelms the shield, the feedback jarring Iron Man for 9 damage.' }
						],
                    },
                    {
                        attack_options: [
                            { name: 'Sonic Repulsor (A repulsor blast with added sonic frequency)', sucess: false, outcome: 'Nexus creates a field of distorted gravity, causing the sonic blast to waver and miss. He then slams Iron Man with a gravitational pulse, dealing 9 damage.' },
								{ name: 'Arc Reactor Overload (A risky burst of energy from the arc reactor)', sucess: false, outcome: 'Nexus anticipates the energy surge and drains a portion of it, using it to amplify his own attack, hitting Iron Man for 9 damage.' },
								{ name: 'Gauntlet Laser (A precise laser beam from the gauntlet)', sucess: true, outcome: 'A focused laser beam strikes Nexus\'s shoulder, causing him to hiss in pain.' },
								{ name: 'Defensive Counter (Using the armor to block and retaliate)', sucess: true, outcome: 'Iron Man blocks a physical attack and delivers a powerful counter-punch with his armored fist.' }
							],
                    }
                ]
            },
            goto: "next"
        },
        {
            text: "In the desolate ruins of a once-bustling city, a dark energy pulsed from a hidden chamber. Dreadlord Nexus knelt within, his form flickering as he absorbed the residual energies from his battles, his wounds slowly knitting back together. The air crackled with dark potential as he meditated, his resolve hardening.",
			recharge: 28,
            goto: "next"
        },
        {
            text: "Captain America stood his ground amidst the chaos, his shield emblazoned with hope against the encroaching darkness. 'Nexus!' his voice boomed, filled with unwavering determination. 'This ends here! You won't destroy this world!' Dreadlord Nexus descended slowly, his eyes burning with cold fury. 'Rogers,' he sneered, 'your idealism is your weakness. This world must be purged for true peace to take hold.'",
            fight: {
				opponentAtackPower: 35,
                rounds: [
                    {
                        attack_options: [
                            { name: 'Shield Throw (A precise throw of the vibranium shield)', sucess: true, outcome: 'The shield strikes Nexus squarely, disrupting his concentration and causing a ripple in his energy field.' },
							{ name: 'Agile Dodge (Evading an attack with enhanced reflexes)', sucess: true, outcome: 'Captain America swiftly sidesteps a blast of dark energy.' },
							{ name: 'Charging Strike (A powerful punch delivered with momentum)', sucess: false, outcome: 'Nexus erects a telekinetic barrier, stopping the punch. He then lashes out with a tendril of dark energy, hitting Captain America for 35 damage.' },
							{ name: 'Defensive Stance (Bracing behind the vibranium shield)', sucess: false, outcome: 'Nexus unleashes a concentrated energy beam that cracks Captain America\'s shield, the force knocking him back and dealing 35 damage.' }
						],
                    },
                    {
                        attack_options: [
                            { name: 'Shield Bash (A close-quarters strike with the shield)', sucess: true, outcome: 'Captain America slams his shield into Nexus\'s chest, staggering him.' },
							{ name: 'Tactical Roll (Evading a ground-based attack)', sucess: true, outcome: 'Captain America rolls out of the way as the ground beneath him erupts with dark energy.' },
							{ name: 'Inspiring Shout (Attempting to disrupt the opponent with a rallying cry)', sucess: false, outcome: 'Nexus\'s dark influence washes over Captain America, momentarily weakening his resolve.' },
							{ name: 'Ricochet Throw (Bouncing the shield off the environment for an unpredictable attack)', sucess: false, outcome: 'Nexus anticipates the trajectory and catches the shield mid-air, redirecting a blast of energy at Captain America for 35 damage.' }
						],
                    },
					{
                        attack_options: [
                            { name: 'Shield Charge (A full-force charge with the shield leading)', sucess: false, outcome: 'Nexus creates a vortex of dark energy, halting Captain America\'s charge and throwing him back, dealing 35 damage.' },
							{ name: 'Precision Strike (A calculated strike aimed at a vulnerable point)', sucess: true, outcome: 'Captain America lands a solid punch to Nexus\'s exposed side.' },
							{ name: 'Defensive Block (Using the shield to absorb a powerful blow)', sucess: true, outcome: 'Captain America manages to block a powerful energy blast with his shield, though the impact still shakes him.' },
							{ name: 'Disorienting Throw (A quick shield throw aimed to distract)', sucess: false, outcome: 'Nexus swats the shield away effortlessly and retaliates with a swift energy strike, hitting Captain America for 35 damage.' }
						],
                    }
                ]
            },
            goto: "next"
        },
        {
            text: "In a swirling vortex of mystic energy, Doctor Strange confronted Dreadlord Nexus. 'Nexus,' his voice echoed with arcane power, 'your path leads only to oblivion. There is still a chance for redemption.' Dreadlord Nexus laughed, a chilling sound that reverberated through the dimensions. 'Redemption? Sorcerer, you cling to outdated concepts. This world requires not salvation, but a complete and utter reset!'",
            fight: {
				opponentAtackPower: 45,
                rounds: [
					{
					attack_options: [
                            { name: 'Mystic Bolts (Projectiles of pure magical energy)', sucess: true, outcome: 'Mystic bolts strike Nexus, disrupting his energy flow and causing him to stagger.' },
							{ name: 'Mirror Dimension (Briefly trapping the opponent in an alternate reality)', sucess: true, outcome: 'Nexus finds himself momentarily disoriented within a shifting, mirrored landscape.' },
							{ name: 'Astral Tether (Attempting to bind the opponent with astral energy)', sucess: false, outcome: 'Nexus\'s raw power lashes out, severing the astral tether and sending a jolt of psychic feedback to Doctor Strange, dealing 45 damage.' },
							{ name: 'Shield of Seraphim (Conjuring a protective magical shield)', sucess: false, outcome: 'Nexus unleashes a wave of chaotic energy that cracks the Shield of Seraphim, the impact staggering Doctor Strange for 45 damage.' }
						],
                    },
					{
					attack_options: [
                            { name: 'Crimson Bands of Cyttorak (Binding the opponent with powerful magical bands)', sucess: false, outcome: 'Nexus unleashes a surge of dark energy that shatters the Crimson Bands before they can fully constrict him. The released energy strikes Doctor Strange for 45 damage.' },
							{ name: 'Teleportation (Instantly moving to a different location)', sucess: true, outcome: 'Doctor Strange teleports behind Nexus, preparing another attack.' },
							{ name: 'Eye of Agamotto (Unleashing a disorienting blast of pure energy)', sucess: false, outcome: 'Nexus focuses his own dark energy, countering the Eye\'s blast and creating a shockwave that hits Doctor Strange for 45 damage.' },
							{ name: 'Dimensional Rift (Opening a small, temporary portal)', sucess: true, outcome: 'Doctor Strange opens a small rift, sending a blast of Nexus\'s own energy back at him.' }
						],
                    },
                    {
                        attack_options: [
                             { name: 'Mystic Chain (Conjuring a chain of magical energy to bind and strike)', sucess: false, outcome: 'Nexus telekinetically manipulates the chain, turning it against Doctor Strange and dealing 45 damage.' },
							{ name: 'Time Manipulation (Slowing down time in a localized area)', sucess: false, outcome: 'Nexus adapts, his movements becoming blurred and unpredictable, negating the time slow and striking Doctor Strange for 45 damage.' },
							{ name: 'Illusion Casting (Creating a deceptive image to confuse the opponent)', sucess: true, outcome: 'Doctor Strange creates a convincing illusion, causing Nexus to hesitate.' },
        					{ name: 'Energy Absorption (Draining energy from the opponent)', sucess: true, outcome: 'Doctor Strange attempts to drain energy, weakening Nexus slightly.' }
						],
                    },
                    {
                        attack_options: [
                            { name: 'Summoned Construct (Conjuring a magical being to fight)', sucess: false, outcome: 'Nexus unleashes a chaotic energy blast that obliterates the construct, the backlash hitting Doctor Strange for 45 damage.' },
							{ name: 'Mystic Barrage (Unleashing a flurry of magical attacks)', sucess: true, outcome: 'A barrage of mystic attacks strikes Nexus, pushing him back.' },
							{ name: 'Binding Spell (Attempting to magically restrain the opponent)', sucess: false, outcome: 'Nexus resists the binding spell, his power overwhelming the magic and striking Doctor Strange for 45 damage.' },
        					{ name: 'Karmic Retribution (Reflecting damage back at the attacker)', sucess: true, outcome: 'Doctor Strange channels Nexus\'s own energy back at him, causing him pain.' }
						],
                    }
                ]
            },
            goto: "next"
        },
        {
            text: "Ignoring the fallen heroes, Malakor reached his final objective: a hidden nexus point where the fabric of reality was thin. With a triumphant roar, he unleashed the full extent of his power, tearing a hole in the universe. A wave of pure, destructive energy surged outwards, consuming everything in its path. The world, once vibrant and chaotic, began to unravel, dissolving into nothingness as Malakor watched, a chillingly satisfied smile on his face.",
            goto: "end"
        }
    ]
};

export default gameData;