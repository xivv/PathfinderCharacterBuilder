// Initialises the whole app
var app = angular.module("characterBuilder", []);

/*
 *  Manages the character bases
 */
app.controller("characterSkillchecks", function ($scope, Character, AbilityScores, SkillChecks) {
    $scope.character = Character.character;
    $scope.abilityScores = AbilityScores.abilityScores;
    $scope.skillchecks = SkillChecks.skillchecks;

    $scope.cutSkillKey = function (skill) {

        return skill.keyAbility.substring(0, 3).toUpperCase();
    }

    $scope.resetSkillchecks = function () {

        Object.keys($scope.skillchecks).forEach(function (element) {

            $scope.skillchecks[element]["ranks"] = 0;
            $scope.skillchecks[element]["totalBonus"] = 0;
            $scope.character.skillRanksLeft = $scope.character.skillRanksTotal;
            $scope.updateAllSkillchecks();
        });


    };

    $scope.updateAllSkillchecks = function () {


        Object.keys($scope.skillchecks).forEach(function (skillname) {

            var classSkillBonus = 0;

            if ($scope.skillchecks[skillname]["classSkill"] && $scope.skillchecks[skillname]["ranks"] > 0) {

                classSkillBonus = 3;
            }

            $scope.skillchecks[skillname]["abilityMod"] = $scope.abilityScores[$scope.skillchecks[skillname]["keyAbility"]]["abilityMod"];


            $scope.skillchecks[skillname]["miscBonusTotal"] = $scope.skillchecks[skillname]["circumstanceBonus"] + $scope.skillchecks[skillname]["competenceBonus"] + $scope.skillchecks[skillname]["insightBonus"] + $scope.skillchecks[skillname]["luckBonus"] + $scope.skillchecks[skillname]["moraleBonus"] + $scope.skillchecks[skillname]["profanceBonus"] + $scope.skillchecks[skillname]["sacredBonus"] + $scope.skillchecks[skillname]["classFeatureBonus"];

            $scope.skillchecks[skillname]["totalBonus"] = $scope.skillchecks[skillname]["ranks"] +
                $scope.skillchecks[skillname]["racialBonus"] +
                $scope.skillchecks[skillname]["abilityMod"] + classSkillBonus + $scope.skillchecks[skillname]["miscBonusTotal"];

        });


    };

    $scope.updateSkillcheck = function (skillname, old_skillranks) {

        var classSkillBonus = 0;

        // Increment
        if (old_skillranks < $scope.skillchecks[skillname]["ranks"]) {


            // While characterlevel is lower
            if ($scope.character.level < $scope.skillchecks[skillname]["ranks"]) {
                $scope.skillchecks[skillname]["ranks"] -= 1;
            } else {
                // Does character have enough points?
                if ($scope.character.skillRanksLeft > 0) {

                    $scope.character.skillRanksLeft -= 1;
                } else {
                    $scope.skillchecks[skillname]["ranks"] -= 1;
                }
            }
        } else {

            // Darf nicht kleiner 1 sein
            if ($scope.skillchecks[skillname]["ranks"] < 0) {
                $scope.skillchecks[skillname]["ranks"] += 1;
            }
            // Einen Punkt mehr verfügbar
            else {
                $scope.character.skillRanksLeft += 1;
            }

        }

        if ($scope.skillchecks[skillname]["classSkill"] && $scope.skillchecks[skillname]["ranks"] > 0) {

            classSkillBonus = 3;
        }

        $scope.skillchecks[skillname]["abilityMod"] = $scope.abilityScores[$scope.skillchecks[skillname]["keyAbility"]]["abilityMod"];

        $scope.skillchecks[skillname]["miscBonusTotal"] = $scope.skillchecks[skillname]["circumstanceBonus"] + $scope.skillchecks[skillname]["competenceBonus"] + $scope.skillchecks[skillname]["insightBonus"] + $scope.skillchecks[skillname]["luckBonus"] + $scope.skillchecks[skillname]["moraleBonus"] + $scope.skillchecks[skillname]["profanceBonus"] + $scope.skillchecks[skillname]["sacredBonus"] + $scope.skillchecks[skillname]["classFeatureBonus"];

        $scope.skillchecks[skillname]["totalBonus"] = $scope.skillchecks[skillname]["ranks"] +
            $scope.skillchecks[skillname]["racialBonus"] +
            $scope.skillchecks[skillname]["abilityMod"] + classSkillBonus + $scope.skillchecks[skillname]["miscBonusTotal"];

    };

    $scope.$watchCollection(function () {
        return $scope.skillchecks["Disable Device"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Acrobatics"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Appraise;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Bluff;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Climb;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Craft;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Diplomacy;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Disguise;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Escape Artist"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Fly;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Handle Animal"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Heal;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Intimidate;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Arcana)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Dungeoneering)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Engineering)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Geography)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(History)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Local)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Nature)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Nobility)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Planes)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Knowledge(Religion)"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Linguistics;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Perception;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Perform;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Profession;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Ride;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Sense Motive"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Sleight Of Hand"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Spellcraft;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Stealth;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Survival;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks.Swim;
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return $scope.skillchecks["Use Magic Device"];
    }, function () {
        $scope.updateAllSkillchecks();
    });

    // Watches if any modifiers changes
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Strength"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Dexterity"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Constitution"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Intelligence"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Wisdom"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Charisma"];
    }, function () {
        $scope.updateAllSkillchecks();
    });
});

/*
 *  Manages the character bases
 */
app.controller("characterBase", function ($scope, Character, Deitys, Alignments) {
    $scope.character = Character.character;
    $scope.deitys = Deitys;
    $scope.alignments = Alignments;

    $scope.filterDeityListCharacterAlignment = function () {

        if (!this.deity_filter.checked)
            return;

        $scope.filterdListOfDeity = [];

        Object.keys($scope.deitys).forEach(function (element) {
            if ($scope.character.alignment == "None" || element == "None") {
                $scope.filterdListOfDeity.push($scope.deitys[element]);
            } else {
                for (var i = 0; i < $scope.deitys[element]["alignments"].length; i++) {

                    if ($scope.filterdListOfDeity.indexOf(element) == -1 && $scope.character.alignment == $scope.deitys[element]["alignments"][i]) {
                        $scope.filterdListOfDeity.push($scope.deitys[element]);
                    }
                }
            }
        });

    };

    $scope.selectDeity = function (deityName) {

        $scope.character.deity = $scope.deitys[deityName];
    }

});

/*
 *  Manages the race functions
 */
app.controller("characterRace", function ($scope, Character, Races, Abilities, AbilityScores, SkillChecks) {
    $scope.character = Character.character;
    $scope.races = Races;
    $scope.abilities = Abilities;
    $scope.raceAbilites = {};
    $scope.abilityScores = AbilityScores.abilityScores;
    $scope.skillchecks = SkillChecks.skillchecks;
    $scope.selectedRace;

    $scope.selectRace = function (race) {

        $scope.character.race = race;
    }

    $scope.getRaceImage = function (race) {

        return "../assets/races/" + race.name + ".png";
    }

    $scope.removeRaceBonuses = function (race) {

        // Is skillcheck bonus?

        var abilities = $scope.getRaceAbilities(race);

        Object.values(abilities).forEach(function (ability) {

            if (ability && ability["bonus"]["skillCheck"]) {

                Object.values(ability["bonus"]["skillCheck"]).forEach(function (element) {
                    $scope.skillchecks[element.check]["racialBonus"] = 0;
                });

            } else if (ability && ability["bonus"]["immunities"]) {

                Object.values(ability["bonus"]["immunities"]).forEach(function (element) {
                    delete $scope.character.immunities[element];
                });

            }
        });
    };

    $scope.applyRaceBonuses = function (race) {

        var abilities = $scope.getRaceAbilities(race);

        Object.values(abilities).forEach(function (ability) {
            // Is skillcheck bonus?
            if (ability && ability["bonus"]["skillCheck"]) {

                Object.values(ability["bonus"]["skillCheck"]).forEach(function (element) {
                    $scope.skillchecks[element.check]["racialBonus"] = element.bonus;
                });

            } else if (ability && ability["bonus"]["immunities"]) {

                Object.values(ability["bonus"]["immunities"]).forEach(function (element) {
                    $scope.character.immunities.push[element];
                });

            }
        });
    };

    $scope.$watch(function () {
        return $scope.character.race;
    }, function (newRace, oldRace) {
        if (oldRace) {
            $scope.removeRaceBonuses(oldRace);
        }
        if (newRace) {
            $scope.applyRaceBonuses(newRace);
            $scope.updateAbilityScoreRaceModifier();
            $scope.updateCharacterAgeFromLevel();
        }


    });

    $scope.agelevel = {
        "Young": {
            "Strength": 0,
            "Dexterity": 0,
            "Constitution": 0,
            "Intelligence": 0,
            "Wisdom": 0,
            "Charisma": 0,
            age: ""
        },
        "Adult": {
            "Strength": 0,
            "Dexterity": 0,
            "Constitution": 0,
            "Intelligence": 0,
            "Wisdom": 0,
            "Charisma": 0,
            age: ""
        },
        "Middle-Aged": {
            "Strength": -1,
            "Dexterity": -1,
            "Constitution": -1,
            "Intelligence": +1,
            "Wisdom": +1,
            "Charisma": +1,
            age: ""
        },
        "Old": {
            "Strength": -2,
            "Dexterity": -2,
            "Constitution": -2,
            "Intelligence": +1,
            "Wisdom": +1,
            "Charisma": +1,
            age: ""
        },
        "Venerable": {
            "Strength": -3,
            "Dexterity": -3,
            "Constitution": -3,
            "Intelligence": +1,
            "Wisdom": +1,
            "Charisma": +1,
            age: ""
        }
    };

    $scope.updateAbilityScoreRaceModifier = function () {

        Object.keys($scope.abilityScores).forEach(function (element) {
            $scope.abilityScores[element]["raceMod"] = $scope.character.race["abilityModifier"][element];
        });
    };

    // Given Race
    $scope.getRaceAbilities = function (race) {

        $scope.raceAbilites = {};

        Object.values(race["standardRaceTraits"]).forEach(function (element) {

            $scope.raceAbilites[element] = $scope.abilities[element];
        });

        return $scope.raceAbilites;
    };

    $scope.updateCharacterAgeFromLevel = function () {

        if ($scope.character.race && $scope.character.agelevel) {

            $scope.character.age = $scope.character.race["ageModifier"][$scope.character.agelevel];

            // Insert age limits into all ages array
            Object.keys($scope.agelevel).forEach(function (element) {

                $scope.agelevel[element]["age"] = $scope.character.race["ageModifier"][element];
            });
        }

        if ($scope.character.agelevel) {

            Object.keys($scope.abilityScores).forEach(function (element) {

                $scope.abilityScores[element]["miscMod"] = $scope.agelevel[$scope.character.agelevel][element];
            });
        }

    };

});

/*
 *  Manages the spell functions
 */
app.controller("spellController", function ($scope, Character, AbilityScores) {
    $scope.character = Character.character;


});

/*
 *  Manages the classes functions
 */
app.controller("classController", function ($scope, Character, AbilityScores, Classes, SkillChecks, ClassFeatures) {
    $scope.character = Character.character;
    $scope.classes = Classes;
    $scope.skillchecks = SkillChecks.skillchecks;
    $scope.abilityScores = AbilityScores.abilityScores;
    $scope.classFeatures = ClassFeatures;
    $scope.selectedClass;
    $scope.selectedClassFeature;

    $scope.applyClassFeature = function (classItem, classFeature) {

        if (!angular.equals(classFeature.bonus, {})) {

            if (classFeature.bonus.skillCheck) {

                for (var i = 0; i < classFeature.bonus.skillCheck.length; i++) {

                    var skillCheck = classFeature.bonus.skillCheck[i];
                    $scope.skillchecks[skillCheck.check][skillCheck.bonus.type] += skillCheck.bonus.value;

                    // If bonus is calculated by a formular
                    if (skillCheck.bonus.formular) {

                        // If bonus depends on the class level
                        if (skillCheck.bonus.formular.attribute == "classLevel") {

                            var totalBonus = skillCheck.bonus.formular.modifier * classItem.level;

                            if (totalBonus < skillCheck.bonus.formular.minimum) {
                                totalBonus = skillCheck.bonus.formular.minimum;
                            }
                            $scope.skillchecks[skillCheck.check][skillCheck.bonus.type] += totalBonus;
                        }

                    }

                }
            }
        }

    }

    $scope.removeClassFeature = function (classItem, classFeature) {

        if (!angular.equals(classFeature.bonus, {})) {

            if (classFeature.bonus.skillCheck) {

                for (var i = 0; i < classFeature.bonus.skillCheck.length; i++) {

                    var skillCheck = classFeature.bonus.skillCheck[i];
                    $scope.skillchecks[skillCheck.check][skillCheck.bonus.type] += skillCheck.bonus.value;

                    // If bonus is calculated by a formular
                    if (skillCheck.bonus.formular) {

                        // If bonus depends on the class level
                        if (skillCheck.bonus.formular.attribute == "classLevel") {

                            var totalBonus = skillCheck.bonus.formular.modifier * (classItem.level + 1);

                            if (totalBonus < skillCheck.bonus.formular.minimum) {
                                totalBonus = skillCheck.bonus.formular.minimum;
                            }
                            $scope.skillchecks[skillCheck.check][skillCheck.bonus.type] -= totalBonus;
                        }

                    }

                }
            }
        }

    }

    $scope.selectClassFeature = function (classFeatureName) {

        $scope.selectedClassFeature = $scope.classFeatures[classFeatureName];
    }

    $scope.calculateSkillPointsTotal = function () {

        var total = 0;

        Object.values($scope.character.classes).forEach(function (element) {

            total += element.level * $scope.abilityScores.Intelligence.abilityMod + element.level * element.skillRanksPerLevel;
        });

        return total;
    }

    $scope.selectClass = function (element) {
        $scope.selectedClass = $scope.classes[element];
    }

    $scope.removeLevel = function (className) {

        var classItem = $scope.classes[className];

        // If already has a level in this class
        if ($scope.character.classes[classItem.name]) {

            $scope.character.classes[classItem.name]["level"] -= 1;
        }

        // Remove Class features
        var level = $scope.character.classes[className]["level"] + 1;

        for (var i = 0; i < $scope.character.classes[className]["progression"][level]["classFeature"].length; i++) {

            var classFeature = $scope.character.classes[className]["progression"][level]["classFeature"][i];
            classFeature = $scope.classFeatures[classFeature];
            $scope.removeClassFeature($scope.character.classes[className], classFeature);
        }

        if ($scope.character.classes[classItem.name]["level"] <= 0) {

            delete $scope.character.classes[classItem.name];
        }

        $scope.postLevelChange();

    }

    $scope.postLevelChange = function () {

        $scope.character.skillRanksTotal = $scope.calculateSkillPointsTotal();
        $scope.character.level = $scope.getTotal("level");
    }

    $scope.addLevel = function (className) {


        if (!className) {
            return;
        }

        var classItem = $scope.classes[className];

        // If already has a level in this class

        if ($scope.character.classes[className]) {

            if ($scope.character.classes[className]["level"] == 20) {

                return;
            }

            $scope.character.classes[className]["level"] += 1;
        } else {

            $scope.character.classes[className] = classItem;
            $scope.character.classes[className]["level"] = 1;


        }

        var level = $scope.character.classes[className]["level"];

        for (var i = 0; i < $scope.character.classes[className]["progression"][level]["classFeature"].length; i++) {

            var classFeature = $scope.character.classes[className]["progression"][level]["classFeature"][i];
            classFeature = $scope.classFeatures[classFeature];
            $scope.applyClassFeature($scope.character.classes[className], classFeature);
        }




        $scope.postLevelChange();
    }

    $scope.calculateClassMaxHp = function (classItem) {

        return classItem["level"] * classItem["hitDie"];
    }

    $scope.calculateTotalClassMaxHp = function () {

        var total = 0;

        Object.values($scope.character.classes).forEach(function (element) {

            total += element["level"] * element["hitDie"];
        });

        return total;
    }

    $scope.getClassProgression = function (stat, classItem) {

        var total = 0;
        var level = classItem.level;

        total += classItem["progression"][level][stat];

        return total;
    }

    $scope.getTotalProgession = function (stat) {

        var total = 0;

        Object.values($scope.character.classes).forEach(function (element) {

            total += $scope.getClassProgression(stat, element);
        });

        return total;
    }

    $scope.getTotal = function (stat) {

        var total = 0;

        Object.values($scope.character.classes).forEach(function (element) {
            total += element[stat];
        });

        return total;
    }

    $scope.applyClassSkills = function (className) {

        // Iterate trough the class data
        Object.values($scope.classes[className]["classSkills"]).forEach(function (element) {

            $scope.skillchecks[element]["classSkill"] = true;

        });
    }

    $scope.$watchCollection(function () {
        return $scope.abilityScores.Intelligence;
    }, function () {
        $scope.character.skillRanksTotal = $scope.calculateSkillPointsTotal();
    });

    $scope.$watch(function () {
        return $scope.character.skillRanksTotal;
    }, function (newValue, oldValue) {
        $scope.character.skillRanksLeft += newValue - oldValue;
    });


});

/*
 *  Manages the itemstore functions
 */
app.controller("itemStoreController", function ($scope, EnhancementCosts, Character, AbilityScores, Inventory, EquipedItems, Weapons, Armor, Goods, MagicItems, Shields, Materials, Capacity) {
    $scope.character = Character.character;
    $scope.weapons = Weapons;
    $scope.goods = Goods;
    $scope.armor = Armor;
    $scope.inventory = Inventory;
    $scope.equipedItems = EquipedItems;
    $scope.magicItems = MagicItems;
    $scope.shields = Shields;
    $scope.materials = Materials;
    $scope.customItems = {};
    $scope.enhancementCosts = EnhancementCosts;

    $scope.lightLoad = 0;
    $scope.mediumLoad = 0;
    $scope.heavyLoad = 0;
    $scope.selectedItem;

    $scope.sortReverse = false;
    $scope.searchTerm = "";
    $scope.sortType = "name";
    $scope.sizeChart = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];

    $scope.damageProgressionChart = [
        {
            "die": 1,
            "eyes": 1
        }, {
            "die": 1,
            "eyes": 2
        }, {
            "die": 1,
            "eyes": 3
        }, {
            "die": 1,
            "eyes": 4
        }, {
            "die": 1,
            "eyes": 6
        }, {
            "die": 1,
            "eyes": 8
        }, {
            "die": 1,
            "eyes": 10
        }, {
            "die": 2,
            "eyes": 6
        }, {
            "die": 2,
            "eyes": 8
        }, {
            "die": 3,
            "eyes": 6
        }, {
            "die": 3,
            "eyes": 8
        }, {
            "die": 4,
            "eyes": 6
        }, {
            "die": 4,
            "eyes": 8
        }, {
            "die": 6,
            "eyes": 6
        }, {
            "die": 6,
            "eyes": 8
        }, {
            "die": 8,
            "eyes": 6
        }, {
            "die": 8,
            "eyes": 8
        }, {
            "die": 12,
            "eyes": 6
        }, {
            "die": 12,
            "eyes": 8
        }, {
            "die": 16,
            "eyes": 6
        }
    ];

    $scope.sizeModifierTable = {
        "weight": {
            "Tiny": 0.1,
            "Small": 0.5,
            "Medium": 1,
            "Large": 2,
            "Huge": 5,
            "Gargantuan": 8,
            "Colossal": 12
        },
        "price": {
            "Tiny": 0.5,
            "Small": 1,
            "Medium": 1,
            "Large": 2,
            "Huge": 4,
            "Gargantuan": 8,
            "Colossal": 16
        }
    };


    $scope.purchaseMode = {
        "value": "creation"
    };

    $scope.adjustWeaponDamageToSize = function (item, size) {

        var differenceToTargetSize = $scope.sizeChart.indexOf(size) - $scope.sizeChart.indexOf(item.attributes.size);
        var isIncrementInSize = false;
        var modifier = 0;

        if (differenceToTargetSize > 0) {
            isIncrementInSize = true;
            modifier = 1;
        } else if (differenceToTargetSize < 0) {
            isIncrementInSize = false;
            modifier = -1;
        } else {
            return;
        }

        for (var i = 0; i < Math.abs(differenceToTargetSize); i++) {

            var actualSize = $scope.sizeChart[$scope.sizeChart.indexOf(item.attributes.size) + i];
            var damageObject = item.attributes.damage;
            var changeAmount = 0;

            if (actualSize == "Small" || actualSize == "Medium") {
                changeAmount = 1;
            } else if (isIncrementInSize && (damageObject.die == 1 && damageObject.eyes <= 6)) {
                changeAmount = 1;
            } else if (!isIncrementInSize && (damageObject.die == 1 && damageObject.eyes <= 8)) {
                changeAmount = 1;
            } else {
                changeAmount = 2;
            }

            var indexOfItemDamage = 0;

            for (var a = 0; a < $scope.damageProgressionChart.length; a++) {

                if ($scope.damageProgressionChart[a]["eyes"] == damageObject.eyes && $scope.damageProgressionChart[a]["die"] == damageObject.die) {
                    indexOfItemDamage = a;
                }

            }

            var newDamageObject = $scope.damageProgressionChart[indexOfItemDamage + (changeAmount * modifier)];

            item.attributes.damage.die = newDamageObject.die;
            item.attributes.damage.eyes = newDamageObject.eyes;


        }

        return item;
    }

    $scope.createNewItemName = function (item) {

        // Darkwood Longbow, composite (+5) (H)
        // Vorpal +5 Adamantine Longsword (S)

        //Reset itemName
        var enhancementBonus = "";
        var isComposite = "";
        var isMasterwork = "";
        var materialName = "";
        var size = "";


        if (item.attributes.condition) {

            if (item.attributes.condition.isComposite) {
                isComposite = ", composite (+" + item.attributes.condition.strengthRating + ")";
            } else if (item.attributes.condition.isMasterwork && !item.attributes.condition.isMagical) {
                isMasterwork = " Masterwork";
            } else if (item.attributes.condition.isMagical) {
                enhancementBonus = "+" + item.attributes.condition.enhancementBonus + " ";
            }

            if (item.attributes.condition.material) {
                materialName = item.attributes.condition.material.name + " ";
            }

            if (item.attributes.size) {
                if (item.attributes.size != "Medium") {
                    size = " (" + (item.attributes.size).charAt(0) + ")";
                }
            }


        }

        var newItemName = enhancementBonus + materialName + item.name + isMasterwork + isComposite + size;
        return newItemName;

    }


    $scope.getNewItemPrice = function (item, change, modifier) {

        var price = 0;

        if (!item || !change) {
            return;
        }
        if (change == "Change Material" && modifier) {
            price += $scope.getMaterialChangeCosts(item, modifier);
        } else if (change == "Magical" && modifier && $scope.qualifiesForMagical(item)) {
            price += $scope.getMasterworkChangeCosts(item);
            price += $scope.getMagicalChangeCosts(item, modifier);
        } else if (change == "Masterwork" && $scope.qualifiesForMasterwork(item)) {
            price += $scope.getMasterworkChangeCosts(item);
        } else if (change == "Composite" && modifier && $scope.qualifiesForComposite(item)) {
            price += $scope.getCompositeChangeCosts(item, modifier);
        } else if (change == "Change Size" && modifier && $scope.qualifiesForSizeChange(item)) {
            price = item.price * $scope.getSizeChangeCosts(item, modifier) - item.price;
        }

        return price + item.price;
    }

    $scope.qualifiesForMaterialChange = function (item, materialName) {

        if (!item) {
            return;
        }

        if (item.type != "Magic Item" && item.type != "Goods" && item.type != "Alchemical Creations") {

            // TO-DO: This is just a workaround to specifiy if item can be made out of material
            if (materialName && $scope.getMaterialChangeCosts(item, materialName) <= 0) {

                return false;
            }

            return true;
        } else {
            return false;
        }
    }

    $scope.qualifiesForSizeChange = function (item) {

        if (!item) {
            return;
        }
        if (item.attributes.size != "Medium") {
            return false;
        } else if (item.type != "Magic Item" && item.type != "Goods" && item.type != "Alchemical Creations") {
            return true;
        } else {
            return false;
        }
    }

    $scope.getSizeChangeWeight = function (item, modifier) {

        if (!item || !modifier) {
            return;
        }

        var newWeight = 0;
        newWeight = item.weight * $scope.sizeModifierTable["weight"][modifier];

        return newWeight;
    }

    $scope.getSizeChangeCosts = function (item, modifier) {

        var price = $scope.sizeModifierTable["price"][modifier];

        return price;
    }

    $scope.getMaterialChangeCosts = function (item, modifier) {

        var price = 0;

        var material = $scope.materials[modifier];

        if (material.cost.type == "weight") {

            price += item.weight * material.cost.increase;

        } else if (material.cost[item.type]) {

            price += material.cost[item.type];
        } else if (material.cost[item.attributes.proficiency]) {

            price += material.cost[item.attributes.proficiency];
        } else if (material.cost[item.attributes.subtype]) {

            price += material.cost[item.attributes.subtype];
        }

        if (material.changes.makesMasterwork && item.attributes.condition && !item.attributes.condition.isMasterwork) {

            price += $scope.getMasterworkChangeCosts(item);
        }

        return price;
    }

    $scope.qualifiesForComposite = function (item) {

        if (!item || !item.attributes.condition) {
            return false;
        }
        return (item.attributes.condition.isComposite == false) && item.type == "Weapon" && item.attributes.subtype == "Ranged Weapons";
    }

    $scope.qualifiesForMasterwork = function (item) {

        if (!item || !item.attributes.condition) {
            return false;
        }
        return (item.attributes.condition.isMagical == false && item.attributes.condition.isMasterwork == false) && (item.type == "Weapon" || item.type == "Shield" ||
            item.type == "Armor");
    }

    $scope.qualifiesForMagical = function (item, enhancementBonus) {

        if (!item || !item.attributes.condition) {
            return false;
        }
        return (item.attributes.condition.enhancementBonus < enhancementBonus || item.attributes.condition.enhancementBonus == 0) && (item.type == "Weapon" || item.type == "Shield" || item.type == "Armor");

    }

    $scope.changeSizeOfItem = function (item, size) {

        var newItem = JSON.parse(JSON.stringify(item));
        var newItemPrice = $scope.getNewItemPrice(item, "Change Size", size);
        var newItemWeight = $scope.getSizeChangeWeight(item, size);

        if (newItem.type == "Weapon") {

            newItem = $scope.adjustWeaponDamageToSize(newItem, size);
        }

        newItem.price = newItemPrice;
        newItem.weight = newItemWeight;
        newItem.attributes.size = size;
        newItem.displayName = $scope.createNewItemName(newItem);

        return newItem;
    }


    $scope.changeMaterialOfItem = function (item, materialName) {

        var newItem = JSON.parse(JSON.stringify(item));
        var newItemPrice = $scope.getNewItemPrice(item, "Change Material", materialName);

        var material = $scope.materials[materialName];

        if (material.changes.makesMasterwork && !item.attributes.condition.isMagical && !item.attributes.condition.isMasterwork) {
            newItem = $scope.craftMasterwork(newItem);
        }



        // If it changes attributes of the item
        if (material.changes[newItem.type]) {

            Object.keys(material.changes[newItem.type]).forEach(function (element) {

                newItem.attributes[element] += material.changes[newItem.type][element];
            });
        }

        if (material.changes[newItem.type]) {

            if (newItem.type == "Armor") {
                if (material.changes.Armor.speedLimitationChange) {
                    newItem.attributes.speed["30"] += material.changes.Armor.speedLimitationChange[newItem.attributes.proficiency][30];
                    newItem.attributes.speed["20"] += material.changes.Armor.speedLimitationChange[newItem.attributes.proficiency][20];
                }
            }
        }

        if (material.changes.weight) {
            newItem.weight = newItem.weight * material.changes.weight;
        }

        newItem.price = newItemPrice;
        newItem.attributes.condition.material = material;
        newItem.displayName = $scope.createNewItemName(newItem);

        return newItem;
    }

    $scope.removeCorruptedFields = function (item) {

        if (item.type == "Shield" || item.type == "Armor") {

            var valuesNotLessZero = ["shieldBonus", "maximumDexBonus", "arcaneSpellFailure"];

            for (var i = 0; i < valuesNotLessZero.length; i++) {

                if (item.attributes[valuesNotLessZero[i]] && item.attributes[valuesNotLessZero[i]] < 0) {
                    item.attributes[valuesNotLessZero[i]] = 0;
                }
            }

            var valuesNotGreaterZero = ["armorCheckPenalty"];

            for (var a = 0; a < valuesNotGreaterZero.length; a++) {

                if (item.attributes[valuesNotGreaterZero[a]] && item.attributes[valuesNotGreaterZero[a]] > 0) {
                    item.attributes[valuesNotGreaterZero[a]] = 0;
                }
            }
        }

        return item;
    }

    $scope.craftMagical = function (item, enhancementBonus) {

        var newItemPrice = $scope.getNewItemPrice(item, "Magical", enhancementBonus);
        var newItem = JSON.parse(JSON.stringify(item));
        newItem.price = newItemPrice;
        newItem.attributes.condition.isMagical = true;
        newItem.attributes.condition.enhancementBonus = enhancementBonus;

        if (newItem.type == "Weapon") {

            // Maxium +5 on attack and damage
            if (enhancementBonus > 5) {
                newItem.attributes.damage.changes.damage = 5;
                newItem.attributes.damage.changes.attackRoll = 5;
            } else {
                newItem.attributes.damage.changes.damage = enhancementBonus;
                newItem.attributes.damage.changes.attackRoll = enhancementBonus;
            }

        }

        newItem.displayName = $scope.createNewItemName(newItem);

        return newItem;
    }

    $scope.craftComposite = function (item, strengthRating) {

        var newItemPrice = $scope.getNewItemPrice(item, "Composite", strengthRating);
        var newItem = JSON.parse(JSON.stringify(item));


        newItem.price = newItemPrice;
        newItem.attributes.condition.isComposite = true;
        newItem.attributes.condition.strengthRating = strengthRating;
        newItem.displayName = $scope.createNewItemName(newItem);

        return newItem;
    }

    $scope.createCustomItem = function (item, change, modifier) {

        var customItem;

        if (change == "Masterwork") {
            customItem = $scope.craftMasterwork(item);
        } else if (change == "Magical") {
            customItem = $scope.craftMasterwork(item);
            customItem = $scope.craftMagical(customItem, modifier);
        } else if (change == "Composite") {
            customItem = $scope.craftComposite(item, modifier);
        } else if (change == "Change Material") {
            customItem = $scope.changeMaterialOfItem(item, modifier);
        } else if (change == "Change Size") {
            customItem = $scope.changeSizeOfItem(item, modifier);
        }

        customItem = $scope.removeCorruptedFields(customItem);

        if (item.type == "Weapon") {

            if (!$scope.weapons[customItem.displayName]) {
                $scope.weapons[customItem.displayName] = customItem;
            }

        } else if (item.type == "Shield") {
            if (!$scope.shields[customItem.displayName]) {
                $scope.shields[customItem.displayName] = customItem;
            }
        } else if (item.type == "Armor") {
            if (!$scope.armor[customItem.displayName]) {
                $scope.armor[customItem.displayName] = customItem;
            }
        }
        if (!$scope.customItems[customItem.displayName]) {
            $scope.customItems[customItem.displayName] = customItem;
        }
    }

    $scope.craftMasterwork = function (item) {

        if (item.attributes.condition.isMasterwork) {
            return item;
        }

        var newItemPrice = $scope.getNewItemPrice(item, "Masterwork");
        var newItem = JSON.parse(JSON.stringify(item));

        if (item.type == "Shield" || item.type == "Armor") {
            newItem.attributes.armorCheckPenalty += 1;
        }

        newItem.price = newItemPrice;
        newItem.attributes.condition.isMasterwork = true;
        newItem.displayName = $scope.createNewItemName(newItem);

        return newItem;
    }

    $scope.getMagicalChangeCosts = function (item, enhancementBonus) {

        var price = 0;

        if ($scope.selectedItem) {

            if (item.attributes.condition.isMasterwork) {
                price -= 300;
            }

            if (item.type == "Weapon") {

                price += $scope.enhancementCosts[enhancementBonus];
            } else if (item.type == "Shield" || item.type == "Armor") {
                price += ($scope.enhancementCosts[enhancementBonus] / 2);
            }
        }

        return price;
    };

    $scope.getCompositeChangeCosts = function (item, strength) {

        if ($scope.selectedItem) {

            if (item.name.includes("Longbow")) {
                return strength * 100 + 25;
            } else if (item.name.includes("Shortbow")) {
                return strength * 75 + 45;
            } else {
                return 0;
            }
        }
    };

    $scope.getMasterworkChangeCosts = function (item) {

        if ($scope.selectedItem) {
            if (item.type == "Weapon") {

                if (item.attributes.special["double"]) {
                    return 600;
                } else if (item.attributes.subtype == "Ammunition") {
                    return 6;
                } else {
                    return 300;
                }

            }

            if (item.type == "Armor" || item.type == "Shield") {

                return 150;
            }
        }

    };

    $scope.getObjectAsArray = function (object) {

        var array = Object.keys(object).map(function (key) {
            return object[key];
        });

        return array;
    };

    $scope.selectItem = function (item) {

        if (!item || $scope.selectedItem == item) {

            return;
        }

        $scope.selectedItem = item;
    };

    $scope.buySelectedItem = function () {

        if ($scope.selectedItem && $scope.character.funds >= $scope.selectedItem.price) {

            $scope.character.funds -= $scope.selectedItem.price;
            $scope.character.value += $scope.selectedItem.price;
            $scope.character.weight += $scope.selectedItem.weight;
            $scope.inventory.push($scope.selectedItem);

            if ($scope.purchaseMode.value == "crafting") {

                $scope.character.funds += 0.5 * $scope.selectedItem.price;
            }
        } else {
            console.log("Insufficient amount of money");
        }
    }

    $scope.sellItemFromInventory = function (item, index) {

        if (item) {

            $scope.inventory.splice(index, 1);
            $scope.character.funds += item.price;
            $scope.character.value -= $scope.selectedItem.price;
            $scope.character.weight -= item.weight;

            if ($scope.purchaseMode.value == "buy_sell") {
                $scope.character.funds -= 0.5 * item.price;
            }

            if ($scope.purchaseMode.value == "crafting") {
                $scope.character.funds -= 0.5 * item.price;
            }
        }
    }

    $scope.unequipItemFromSlot = function (slot) {

        if ($scope.equipedItems[slot]) {
            $scope.inventory.push($scope.equipedItems[slot]);
            $scope.equipedItems[slot] = null;
        } else {
            console.log("Slot Exception: " + slot + ", Item:" + $scope.equipedItems[slot]);
        }
    };

    $scope.equipItemFromInventory = function (item, index) {

        if (item) {

            var slotToEquip = item.attributes.slot;


            if (item.attributes.slot == "Ring") {

                if ($scope.equipedItems.Ring1 == null) {
                    slotToEquip = "Ring1";
                } else if ($scope.equipedItems.Ring2 == null) {
                    slotToEquip = "Ring2";
                } else {
                    console.log("Equip Exception: " + item);
                    return;
                }
            }

            if (item.attributes.slot == "Weapon" || item.attributes.slot == "Shield") {

                if (item.attributes.slot == "Weapon") {

                    if ($scope.equipedItems["Primary Hand"] == null) {
                        slotToEquip = "Primary Hand";
                    } else if ($scope.equipedItems["Secondary Hand"] == null) {
                        slotToEquip = "Secondary Hand";
                    } else {
                        console.log("Equip Exception: " + item);
                        return;
                    }
                } else if (item.attributes.slot == "Shield") {

                    if ($scope.equipedItems["Secondary Hand"] == null) {
                        slotToEquip = "Secondary Hand";
                    } else if ($scope.equipedItems["Primary Hand"] == null) {
                        slotToEquip = "Primary Hand";
                    } else {
                        console.log("Equip Exception: " + item);
                        return;
                    }
                }
            }

            if ($scope.equipedItems[slotToEquip]) {

                $scope.unequipItemFromSlot(slotToEquip);
            }

            $scope.equipedItems[slotToEquip] = item;
            $scope.inventory.splice(index, 1);
        } else {
            console.log("Equip Exception: " + item);
        }

    };

    $scope.hasSlotFromInventory = function (item) {


        for (var i = 0; i < $scope.inventory.length; i++) {

            if ($scope.inventory[i].displayName == item) {

                return $scope.inventory[i].slot != "";
            }
        }

        return false;
    }

    $scope.getCapacityFromStrength = function (loadLevel) {

        var grabber = "LightLoad";

        if (loadLevel == 2) {
            grabber = "MediumLoad";
        } else if (loadLevel == 3) {
            grabber = "HeavyLoad";
        }

        return Capacity[AbilityScores.abilityScores["Strength"].finalScore][grabber];
    }
    // Watches if any modifiers changes
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Strength"];
    }, function () {
        $scope.lightLoad = $scope.getCapacityFromStrength(1);
        $scope.mediumLoad = $scope.getCapacityFromStrength(2);
        $scope.heavyLoad = $scope.getCapacityFromStrength(3);
    });
});


/*
 *  Manages the abilityscore functions
 */
app.controller("abilityScores", function ($scope, Character, AbilityScores) {

    $scope.character = Character.character;
    $scope.abilityScores = AbilityScores.abilityScores;

    $scope.abilityScoreCostsTable = {
        7: -4,
        8: -2,
        9: -1,
        10: 0,
        11: 1,
        12: 2,
        13: 3,
        14: 5,
        15: 7,
        16: 10,
        17: 13,
        18: 17
    }

    // Watches if any modifiers changes
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Strength"];
    }, function () {
        $scope.initCharacterAbilityScores();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Dexterity"];
    }, function () {
        $scope.initCharacterAbilityScores();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Constitution"];
    }, function () {
        $scope.initCharacterAbilityScores();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Intelligence"];
    }, function () {
        $scope.initCharacterAbilityScores();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Wisdom"];
    }, function () {
        $scope.initCharacterAbilityScores();
    });
    $scope.$watchCollection(function () {
        return AbilityScores.abilityScores["Charisma"];
    }, function () {
        $scope.initCharacterAbilityScores();
    });

    $scope.initCharacterAbilityScores = function () {

        Object.keys($scope.abilityScores).forEach(function (element) {

            $scope.updateAbilityScore(element);
            $scope.updatePointBuyScores();

        });
    }

    $scope.updatePointBuyScores = function () {

        $scope.totalPoints = 0;

        Object.keys($scope.abilityScores).forEach(function (element) {

            $scope.totalPoints += $scope.calculatePointBuyScore(element);
        });


    };

    $scope.updateAbilityScore = function (name) {

        // Not under 7 not over 18
        if ($scope.abilityScores[name]["pointBuy"] <= 7) {

            $scope.abilityScores[name]["pointBuy"] = 7;
        } else if ($scope.abilityScores[name]["pointBuy"] >= 18) {

            $scope.abilityScores[name]["pointBuy"] = 18;
        }

        $scope.abilityScores[name]["finalScore"] = $scope.abilityScores[name]["pointBuy"] + $scope.abilityScores[name]["raceMod"] + $scope.abilityScores[name]["miscMod"];
        $scope.abilityScores[name]["abilityMod"] = Math.floor(($scope.abilityScores[name]["finalScore"] - 10) / 2);
    };

    $scope.calculatePointBuyScore = function (element) {

        var y = 0;
        var x = $scope.abilityScores[element]["finalScore"] - $scope.abilityScores[element]["miscMod"] - $scope.abilityScores[element]["raceMod"];

        if ($scope.abilityScoreCostsTable[x]) {

            y = $scope.abilityScoreCostsTable[x];
        } else {

            y = (Math.pow(-0.268 + 0.135 * x, 3.76) - 1.25);
        }
        return Math.round(y);
    };


});

/*
 *  This function returns the character object
 */
app.factory('Character', function () {
    return {
        character: {

            // Character Basics
            name: "None",
            gender: "Other",
            alignment: "None",
            deity: "None",

            // Character Abilityscores
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,

            // Race Selector
            race: "",
            age: 0,
            agelevel: "Adult",

            // Skillpage
            acrobatics: 0,
            appraise: 0,
            bluff: 0,
            climb: 0,
            craft: 0,
            diplomacy: 0,
            disableDevice: 0,
            disguise: 0,
            escapeArtist: 0,
            fly: 0,
            handleAnimal: 0,
            heal: 0,
            intimidate: 0,
            knowledgeArcana: 0,
            knowledgeDungeoneering: 0,
            knowledgeEngineering: 0,
            knowledgeGeography: 0,
            knowledgeHistory: 0,
            knowledgeLocal: 0,
            knowledgeNature: 0,
            knowledgeNobility: 0,
            knowledgePlanes: 0,
            knowledgeReligion: 0,
            linguistics: 0,
            perception: 0,
            perform: 0,
            profession: 0,
            ride: 0,
            senseMotive: 0,
            sleightOfHand: 0,
            spellcraft: 0,
            stealth: 0,
            survival: 0,
            swim: 0,
            useMagicDevice: 0,
            customCraft: [

     ],
            customProfession: [

     ],
            customPerform: [

     ],

            // Class selector
            classes: {

            },
            level: 0,

            // Store
            funds: 100000,
            weight: 0,
            value: 0,
            inventory: [

     ],
            equipment: {
                "Head": null,
                "Headband": null,
                "Eyes": null,
                "Shoulders": null,
                "Neck": null,
                "Chest": null,
                "Body": null,
                "Armor": null,
                "Belt": null,
                "Wrists": null,
                "Hands": null,
                "Ring1": null,
                "Ring2": null,
                "Feet": null,
                "Weapon": null,
                "Shield": null
            },

            // Feats
            feats: [

            ],

            // Spells
            spells: [

            ],
            preparedSpells: [

            ],

            // DO NOT NEED TO SAVE
            immunities: [

            ],
            skillRanksLeft: 0,
            skillRanksTotal: 0



        }
    };
});

/*
 *  This function returns the race data
 */
app.factory('Races', function ($http) {

    var obj = {};

    $http.get("./data/races/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["races"].length; i++) {


            var dataString = "./data/races/" + myData["races"][i] + ".json";

            $http.get(dataString).then(function (response_) {


                var racesData = response_.data;
                obj[racesData.name] = racesData;
            });
        }

    });


    return obj;
});

/*
 *  This function returns the abilities data
 */
app.factory('Abilities', function ($http) {

    var obj = {};

    $http.get("./data/abilities/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["abilities"].length; i++) {

            var dataString = "./data/abilities/" + myData["abilities"][i] + ".json";

            $http.get(dataString).then(function (response_) {


                var abilitiesData = response_.data;
                obj[abilitiesData.abilityName] = abilitiesData;
            });
        }

    });


    return obj;
});

/*
 *  This function returns the class features data
 */
app.factory('ClassFeatures', function ($http) {

    var obj = {};

    $http.get("./data/abilities/classfeatures/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["classfeatures"].length; i++) {

            var dataString = "./data/abilities/classfeatures/" + myData["classfeatures"][i] + ".json";

            $http.get(dataString).then(function (response_) {


                var classfeaturesData = response_.data;
                obj[classfeaturesData.name] = classfeaturesData;
            });
        }

    });


    return obj;
});

/*
 *  This function returns the armor data
 */
app.factory('Armor', function ($http) {

    var obj = {};

    $http.get("./data/items/armor/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["armor"].length; i++) {
            var dataString = "./data/items/armor/" + myData["armor"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var armorData = response_.data;
                obj[armorData.name] = armorData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the weapons data
 */
app.factory('Weapons', function ($http) {

    var obj = {};

    $http.get("./data/items/weapons/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["weapons"].length; i++) {
            var dataString = "./data/items/weapons/" + myData["weapons"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var weaponsData = response_.data;
                obj[weaponsData.name] = weaponsData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the weapons data
 */
app.factory('MagicItems', function ($http) {

    var obj = {};

    $http.get("./data/items/magical/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["magical"].length; i++) {
            var dataString = "./data/items/magical/" + myData["magical"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var magicalData = response_.data;
                obj[magicalData.name] = magicalData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the goods data
 */
app.factory('Goods', function ($http) {

    var obj = {};

    $http.get("./data/items/goods/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["goods"].length; i++) {
            var dataString = "./data/items/goods/" + myData["goods"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var goodsData = response_.data;
                obj[goodsData.name] = goodsData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the Shields data
 */
app.factory('Shields', function ($http) {

    var obj = {};

    $http.get("./data/items/shields/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["shields"].length; i++) {
            var dataString = "./data/items/shields/" + myData["shields"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var shieldsData = response_.data;
                obj[shieldsData.name] = shieldsData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the Shields data
 */
app.factory('Materials', function ($http) {

    var obj = {};

    $http.get("./data/items/materials/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["materials"].length; i++) {
            var dataString = "./data/items/materials/" + myData["materials"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var materialsData = response_.data;
                obj[materialsData.name] = materialsData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the deitys data
 */
app.factory('Deitys', function ($http) {

    var obj = {};

    $http.get("./data/deitys/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["deitys"].length; i++) {
            var dataString = "./data/deitys/" + myData["deitys"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var deityData = response_.data;
                obj[deityData.name] = deityData;
            });
        }

    });

    return obj;
});

/*
 *  This function returns the class data
 */
app.factory('Classes', function ($http) {

    var obj = {};

    $http.get("./data/classes/data.json").then(function (response) {

        var myData = response.data;

        for (var i = 0; i < myData["classes"].length; i++) {
            var dataString = "./data/classes/" + myData["classes"][i] + ".json";

            $http.get(dataString).then(function (response_) {

                var classesData = response_.data;
                obj[classesData.name] = classesData;
            });
        }

    });
    return obj;
});

/*
 *  This function returns the alignments
 */
app.factory('Alignments', function () {

    return ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
});


/*
 *  This function returns the items that are equiped
 */
app.factory('EnhancementCosts', function () {

    return {
        1: 2000,
        2: 8000,
        3: 18000,
        4: 32000,
        5: 50000,
        6: 72000,
        7: 98000,
        8: 128000,
        9: 162000,
        10: 200000
    };
});
/*
 *  This function returns the items that are equiped
 */
app.factory('EquipedItems', function () {

    return {
        "Head": null,
        "Headband": null,
        "Eyes": null,
        "Shoulders": null,
        "Neck": null,
        "Chest": null,
        "Body": null,
        "Armor": null,
        "Belt": null,
        "Wrists": null,
        "Hands": null,
        "Ring1": null,
        "Ring2": null,
        "Feet": null,
        "Primary Hand": null,
        "Secondary Hand": null,
        "Unarmed": null
    };
});

/*
 *  This function returns the inventory
 */
app.factory('Inventory', function () {

    return [];
});

/*
 *  This function returns the alignments
 */
app.factory('Capacity', function () {

    return {
        "1": {

            "LightLoad": 3,
            "MediumLoad": 6,
            "HeavyLoad": 10
        },
        "2": {

            "LightLoad": 6,
            "MediumLoad": 13,
            "HeavyLoad": 20
        },
        "3": {

            "LightLoad": 10,
            "MediumLoad": 20,
            "HeavyLoad": 30
        },
        "4": {

            "LightLoad": 13,
            "MediumLoad": 26,
            "HeavyLoad": 40
        },
        "5": {

            "LightLoad": 16,
            "MediumLoad": 33,
            "HeavyLoad": 50
        },
        "6": {

            "LightLoad": 20,
            "MediumLoad": 40,
            "HeavyLoad": 60
        },
        "7": {

            "LightLoad": 23,
            "MediumLoad": 46,
            "HeavyLoad": 70
        },
        "8": {

            "LightLoad": 26,
            "MediumLoad": 53,
            "HeavyLoad": 80
        },
        "9": {

            "LightLoad": 30,
            "MediumLoad": 60,
            "HeavyLoad": 90
        },
        "10": {

            "LightLoad": 33,
            "MediumLoad": 66,
            "HeavyLoad": 100
        },
        "11": {

            "LightLoad": 38,
            "MediumLoad": 76,
            "HeavyLoad": 115
        },
        "12": {

            "LightLoad": 43,
            "MediumLoad": 86,
            "HeavyLoad": 130
        },
        "13": {

            "LightLoad": 50,
            "MediumLoad": 100,
            "HeavyLoad": 150
        },
        "14": {

            "LightLoad": 58,
            "MediumLoad": 116,
            "HeavyLoad": 175
        },
        "15": {

            "LightLoad": 66,
            "MediumLoad": 133,
            "HeavyLoad": 200
        },
        "16": {

            "LightLoad": 76,
            "MediumLoad": 153,
            "HeavyLoad": 230
        },
        "17": {

            "LightLoad": 87,
            "MediumLoad": 173,
            "HeavyLoad": 260
        },
        "18": {

            "LightLoad": 100,
            "MediumLoad": 200,
            "HeavyLoad": 300
        },
        "19": {

            "LightLoad": 116,
            "MediumLoad": 233,
            "HeavyLoad": 350
        },
        "20": {

            "LightLoad": 133,
            "MediumLoad": 266,
            "HeavyLoad": 400
        },
        "21": {

            "LightLoad": 153,
            "MediumLoad": 306,
            "HeavyLoad": 460
        },
        "22": {

            "LightLoad": 173,
            "MediumLoad": 346,
            "HeavyLoad": 520
        },
        "23": {

            "LightLoad": 200,
            "MediumLoad": 400,
            "HeavyLoad": 600
        },
        "24": {

            "LightLoad": 233,
            "MediumLoad": 466,
            "HeavyLoad": 700
        },
        "25": {

            "LightLoad": 266,
            "MediumLoad": 533,
            "HeavyLoad": 800
        },
        "26": {

            "LightLoad": 306,
            "MediumLoad": 613,
            "HeavyLoad": 920
        },
        "27": {

            "LightLoad": 346,
            "MediumLoad": 693,
            "HeavyLoad": 1040
        },
        "28": {

            "LightLoad": 400,
            "MediumLoad": 800,
            "HeavyLoad": 1200
        },
        "29": {

            "LightLoad": 466,
            "MediumLoad": 933,
            "HeavyLoad": 1400
        }
    };
});

/*
 *  This function returns the ability scores
 */
app.factory('AbilityScores', function (Character) {

    return {
        abilityScores: {
            'Strength': {
                name: 'Strength',
                finalScore: 0,
                abilityMod: 0,
                pointBuy: Character.character.strength,
                raceMod: 0,
                miscMod: 0
            },
            'Dexterity': {
                name: 'Dexterity',
                finalScore: 0,
                abilityMod: 0,
                pointBuy: Character.character.dexterity,
                raceMod: 0,
                miscMod: 0
            },
            'Constitution': {
                name: 'Constitution',
                finalScore: 0,
                abilityMod: 0,
                pointBuy: Character.character.constitution,
                raceMod: 0,
                miscMod: 0
            },
            'Intelligence': {
                name: 'Intelligence',
                finalScore: 0,
                abilityMod: 0,
                pointBuy: Character.character.intelligence,
                raceMod: 0,
                miscMod: 0
            },
            'Wisdom': {
                name: 'Wisdom',
                finalScore: 0,
                abilityMod: 0,
                pointBuy: Character.character.wisdom,
                raceMod: +0,
                miscMod: 0
            },
            'Charisma': {
                name: 'Charisma',
                finalScore: 0,
                abilityMod: 0,
                pointBuy: Character.character.charisma,
                raceMod: +0,
                miscMod: 0
            },
        }
    };
});

/*
 *  This function returns the skillchecks scores
 */
app.factory('SkillChecks', function (Character) {

    return {
        skillchecks: {
            "Acrobatics": {
                name: "Acrobatics",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.acrobatics,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0

            },
            "Appraise": {
                name: "Appraise",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.appraise,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Bluff": {
                name: "Bluff",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.bluff,
                keyAbility: "Charisma",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Climb": {
                name: "Climb",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.climb,
                keyAbility: "Strength",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Craft": {
                name: "Craft",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: 0,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Diplomacy": {
                name: "Diplomacy",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.diplomacy,
                keyAbility: "Charisma",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Disable Device": {
                name: "Disable Device",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.disableDevice,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Disguise": {
                name: "Disguise",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.disguise,
                keyAbility: "Charisma",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Escape Artist": {
                name: "Escape Artist",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.escapeArtist,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Fly": {
                name: "Fly",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.fly,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Handle Animal": {
                name: "Handle Animal",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.handleAnimal,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Heal": {
                name: "Heal",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.heal,
                keyAbility: "Wisdom",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Intimidate": {
                name: "Intimidate",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.intimidate,
                keyAbility: "Charisma",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Arcana)": {
                name: "Knowledge(Arcana)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeArcana,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Dungeoneering)": {
                name: "Knowledge(Dungeoneering)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeDungeoneering,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Engineering)": {
                name: "Knowledge(Engineering)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeEngineering,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Geography)": {
                name: "Knowledge(Geography)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeGeography,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(History)": {
                name: "Knowledge(History)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeHistory,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Local)": {
                name: "Knowledge(Local)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeLocal,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Nature)": {
                name: "Knowledge(Nature)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeNature,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Nobility)": {
                name: "Knowledge(Nobility)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeNobility,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Planes)": {
                name: "Knowledge(Planes)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgePlanes,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Knowledge(Religion)": {
                name: "Knowledge(Religion)",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.knowledgeReligion,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Linguistics": {
                name: "Linguistics",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.linguistics,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Perception": {
                name: "Perception",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.perception,
                keyAbility: "Wisdom",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Perform": {
                name: "Perform",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: 0,
                keyAbility: "Charisma",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Profession": {
                name: "Profession",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: 0,
                keyAbility: "Wisdom",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Ride": {
                name: "Ride",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.ride,
                keyAbility: "Wisdom",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Sense Motive": {
                name: "Sense Motive",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.senseMotive,
                keyAbility: "Wisdom",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Sleight Of Hand": {
                name: "Sleight Of Hand",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.sleightOfHand,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Spellcraft": {
                name: "Spellcraft",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.spellcraft,
                keyAbility: "Intelligence",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Stealth": {
                name: "Stealth",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.stealth,
                keyAbility: "Dexterity",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Survival": {
                name: "Survival",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.survival,
                keyAbility: "Wisdom",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Swim": {
                name: "Swim",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.swim,
                keyAbility: "Strength",
                abilityMod: 0,
                armorCheckPenalty: true,
                racialBonus: 0,
                classSkill: false,
                untrained: true,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            },
            "Use Magic Device": {
                name: "Use Magic Device",
                totalBonus: 0,
                miscBonusTotal: 0,
                ranks: Character.character.useMagicDevice,
                keyAbility: "Charisma",
                abilityMod: 0,
                armorCheckPenalty: false,
                racialBonus: 0,
                classSkill: false,
                untrained: false,
                circumstanceBonus: 0,
                competenceBonus: 0,
                insightBonus: 0,
                luckBonus: 0,
                moraleBonus: 0,
                profanceBonus: 0,
                sacredBonus: 0,
                classFeatureBonus: 0
            }
        }
    };
});
