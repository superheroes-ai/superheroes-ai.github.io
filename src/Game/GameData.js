const gameData = {
    title: 'World Ender',
    introduction: 'You are a powerful, nameless villain. Your only goal: to crush this world. But the heroes of Marvel stand in your way!',
    mainCharacterDeathScene: 'With a final, desperate breath, you fall. The heroes watch as your dark reign ends.',
    chapters:[
        {
            text: "You despise this world and its weak inhabitants. You decide the only way to fix it is to destroy it all and start anew.",
        },
        {
            text: "Your first act of terror: you unleash a fiery storm upon New York City. Buildings crumble, and chaos reigns.",
        },
        {
            text: "Amidst the burning ruins, Spider-Man appears, his mask tight with fury. 'You'll pay for this!' he yells, ready to fight.",
            fight: {
                type: "attack",
                opponentAttackPower: 15,
                opponentDeath: "Spider-Man crashes to the ground, web-shooters silent. He's hurt, but not finished.",
                rounds: [
                    {
                        options: [
                            { name: 'Crushing Blow', action: 'You swing a massive fist at Spider-Man.', success: false, outcome: 'He dodges, landing a quick jab to your side.' },
                            { name: 'Energy Blast', action: 'You unleash a burst of dark energy.', success: true, outcome: 'The blast hits Spider-Man, sending him reeling back.' },
                            { name: 'Shadow Strike', action: 'You try to attack from the shadows.', success: false, outcome: 'His spider-sense tingles, and he leaps away just in time.' },
                            { name: 'Taunt', action: 'You laugh at Spider-Man’s efforts.', success: false, outcome: 'He glares at you, more determined than ever.' },
                        ],
                    },
                ]
            }
        },
        {
            text: "Your next target is a vital energy plant. You plan to overload it, causing a chain reaction that will devastate the region.",
        },
        {
            text: "Iron Man flies in, his armor gleaming. 'Not on my watch, villain!' he shouts, his repulsors charging.",
            fight: {
                type: "attack",
                opponentAttackPower: 18,
                opponentDeath: "Iron Man's armor sparks and cracks. He falls to the ground, defeated but defiant.",
                rounds: [
                    {
                        options: [
                            { name: 'Power Slam', action: 'You bring your full force down on Iron Man.', success: true, outcome: 'The impact shakes the ground, damaging his armor.' },
                            { name: 'Dark Orb', action: 'You hurl a sphere of pure darkness.', success: false, outcome: 'He fires a repulsor blast, intercepting and destroying your attack.' },
                            { name: 'Quick Jab', action: 'You try a swift, unexpected strike.', success: false, outcome: 'His reflexes are too fast; he blocks your attack with his gauntlet.' },
                            { name: 'Intimidate', action: 'You try to break Iron Man\'s will with your menacing presence.', success: false, outcome: 'He stands firm, his eyes burning with determination.' },
                        ],
                    },
                    {
                        options: [
                            { name: 'Ground Smash', action: 'You smash the ground, hoping to knock Iron Man off balance.', success: false, outcome: 'He flies up into the air, avoiding the shockwave.' },
                            { name: 'Chaos Beam', action: 'You unleash a chaotic beam of energy.', success: true, outcome: 'The beam hits Iron Man, causing more damage to his suit.' },
                            { name: 'Deceptive Blow', action: 'You feint one way and attack another.', success: false, outcome: 'His advanced targeting system predicts your move, and he blocks easily.' },
                            { name: 'Mockery', action: 'You belittle Iron Man’s technology.', success: false, outcome: 'He retorts with a sarcastic remark and fires a volley of missiles.' },
                        ],
                    }
                ]
            }
        },
        {
            text: "The battles have taken their toll. You find an abandoned warehouse to lie low and regain your strength.",
            recharge: 35,
        },
        {
            text: "Suddenly, the warehouse walls explode! Hulk smashes through, roaring with anger, followed by Iceman, freezing the air around you.",
            fight: {
                type: "defense",
                opponentAttackPower: 25,
                mainCharacterEscapeText: "Using the chaos of their attack, you create a diversion and slip away into the night.",
                rounds: [
                    {
                        opponentAttack: 'Hulk throws a massive chunk of debris at you!',
                        options: [
                            { name: 'Shadow Shield', action: 'You conjure a shield of dark energy.', success: true, outcome: 'The debris shatters against your shield.' },
                            { name: 'Quick Dodge', action: 'You attempt to quickly move out of the way.', success: false, outcome: 'The debris grazes your arm, causing pain.' },
                            { name: 'Energy Absorb', action: 'You try to absorb the kinetic energy.', success: false, outcome: 'The force is too great, and you are knocked back.' },
                            { name: 'Intense Focus', action: 'You try to anticipate his next move.', success: false, outcome: 'Hulk is too unpredictable.' },
                        ],
                    },
                    {
                        opponentAttack: 'Iceman unleashes a blast of freezing ice!',
                        options: [
                            { name: 'Melt', action: 'You focus your energy to melt the ice.', success: false, outcome: 'The ice encases your feet, slowing you down.' },
                            { name: 'Sidestep', action: 'You try to move to the side.', success: true, outcome: 'You narrowly avoid the freezing blast.' },
                            { name: 'Dark Barrier', action: 'You create a barrier of dark energy.', success: true, outcome: 'The ice harmlessly strikes your barrier.' },
                            { name: 'Counter Freeze', action: 'You try to use your own power against him.', success: false, outcome: 'His control over ice is superior.' },
                        ],
                    },
                    {
                        opponentAttack: 'Hulk charges towards you while Iceman freezes the ground!',
                        options: [
                            { name: 'Evasive Maneuver', action: 'You try to nimbly escape their combined attack.', success: true, outcome: 'You manage to weave through their assault.' },
                            { name: 'Power Burst', action: 'You release a burst of energy to push them back.', success: false, outcome: 'They barely flinch, continuing their attack.' },
                            { name: 'Shadow Blend', action: 'You attempt to disappear into the shadows.', success: false, outcome: 'Iceman freezes the shadows, preventing your escape.' },
                            { name: 'Desperate Plea', action: 'You try to reason with them.', success: false, outcome: 'They are beyond listening.' },
                        ],
                    }
                ]
            }
        },
        {
            text: "You managed to escape the powerful duo. You realize fighting them together is too dangerous. You need to find a way to separate them.",
        },
        {
            text: "Suddenly, Captain America appears, his shield held high. But instead of attacking, he speaks, 'This world... it's flawed. Maybe destruction is the only way.' He seems to be considering your side.",
        },
        {
            text: "Captain America, seemingly convinced by his own doubts, creates an opening by engaging Hulk in a fierce battle. Now, Iceman stands alone. 'You'll regret this,' Iceman says, his eyes filled with icy fury.",
            fight: {
                type: "attack",
                opponentAttackPower: 12,
                opponentDeath: "With a final, shattering gasp, Iceman freezes solid, then crumbles into icy dust.",
                rounds: [
                    {
                        options: [
                            { name: 'Dark Shards', action: 'You unleash a volley of sharp, dark shards.', success: true, outcome: 'The shards pierce Iceman, causing him to stumble.' },
                            { name: 'Freezing Touch', action: 'You attempt to grab Iceman, hoping to freeze him.', success: false, outcome: 'He blasts you with cold air, forcing you back.' },
                            { name: 'Shadow Step', action: 'You try to teleport behind him.', success: false, outcome: 'He creates an ice mirror, anticipating your move.' },
                            { name: 'Mind Games', action: 'You try to confuse him with illusions.', success: false, outcome: 'His focus remains sharp.' },
                        ],
                    },
                    {
                        options: [
                            { name: 'Energy Drain', action: 'You attempt to drain Iceman\'s energy.', success: false, outcome: 'He surrounds himself with a layer of pure ice, blocking your attempt.' },
                            { name: 'Chaos Wave', action: 'You unleash a wave of chaotic energy.', success: true, outcome: 'The wave crashes into Iceman, weakening him further.' },
                            { name: 'Sudden Strike', action: 'You launch a quick, powerful attack.', success: false, outcome: 'He reacts instantly, creating an ice shield.' },
                            { name: 'Provoke', action: 'You taunt Iceman, trying to make him lose control.', success: false, outcome: 'He remains cold and calculating.' },
                        ],
                    }
                ]
            }
        },
        {
            text: "Captain America, weakened from his fight with Hulk, lies on the ground. You approach him, a dark energy swirling around your hand. You plunge a dark blade into his back, absorbing his remaining power.",
            recharge: 40,
        },
        {
            text: "Just when you think victory is within reach, Spider-Man swings back into the scene, bruised but unyielding. 'You haven't won yet!' he snarls, his eyes burning with determination.",
            fight: {
                type: "attack",
                opponentAttackPower: 17,
                opponentDeath: "Spider-Man falls, his body limp. His webs cease to fly. He is finally defeated.",
                rounds: [
                    {
                        options: [
                            { name: 'Dark Tendrils', action: 'Shadowy tendrils lash out at Spider-Man.', success: true, outcome: 'The tendrils wrap around him, constricting his movements.' },
                            { name: 'Speed Strike', action: 'You attempt a lightning-fast attack.', success: false, outcome: 'His agility allows him to dodge at the last second.' },
                            { name: 'Energy Field', action: 'You create a field of dark energy around yourself.', success: false, outcome: 'He shoots webs, pulling himself closer to strike.' },
                            { name: 'Psychological Attack', action: 'You try to break his spirit with dark whispers.', success: false, outcome: 'His resolve remains strong.' },
                        ],
                    },
                    {
                        options: [
                            { name: 'Soul Drain', action: 'You try to drain Spider-Man\'s life force.', success: false, outcome: 'He fires a web in your face, disrupting your focus.' },
                            { name: 'Final Blow', action: 'You unleash a powerful, finishing attack.', success: true, outcome: 'The attack hits Spider-Man with full force, ending the fight.' },
                            { name: 'Shadow Clone', action: 'You create a shadowy duplicate to confuse him.', success: false, outcome: 'His spider-sense detects the real you.' },
                            { name: 'Despair', action: 'You try to fill his mind with despair.', success: false, outcome: 'He spits defiantly.' },
                        ],
                    }
                ]
            }
        },
        {
            text: "With the last hero fallen, your dark energy surges. You unleash it upon the world. Cities crumble, oceans boil, and the sky turns a terrifying shade of black. Your goal is achieved. The world is broken.",
        }
    ]
};

export default gameData;