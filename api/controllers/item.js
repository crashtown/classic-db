const Sequelize = require("sequelize");
const db = require('../db/models');

const ItemController = {
  getById: async (itemId) => {
    return await db.app
      .transaction(async (t) => {
        return await db.app.models.item.findOne(
          {
            where: {
              entry: itemId,
            },
          },
          { transaction: t },
        )
          .then((item) => {
            return item ? {
              id: item.entry,
  name: item.name,
  description: item.description,
  class: item.class,
  subClass: item.subclass,
  quality: item.Quality,
  bindType: item.bonding,
  buyPrice: item.buyPrice,
  sellPrice: item.sellPrice,
  equipType: item.InventoryType,
  unique: item.maxcount,
  stackAmount:  item.stackable,
  classRestriction: item.AllowableClass,
  raceRestriction: item.raceRestriction,
  level: item.ItemLevel,
  requiredLevel: item.RequiredLevel,
  requiredSkill: item.RequiredSkill,
  requiredSkillRank: item.RequiredSkillRank,
  requiredSpell: item.requiredspell,
  requiredHonorRank: item.requiredhonorrank,
  requiredFactionReputation: item.RequiredReputationFaction,
  requiredFactionReputationRank: item.RequiredReputationRank,
  itemDisenchantId: item.DisenchantID,
  itemStatType1: item.stat_type1,
  itemStatValue1: item.stat_value1,
  itemStatType2: item.stat_type2,
  itemStatValue2: item.stat_value2,
  itemStatType3: item.stat_type3,
  itemStatValue3: item.stat_value3,
  itemStatType4: item.stat_type4,
  itemStatValue4: item.stat_value4,
  itemStatType5: item.stat_type5,
  itemStatValue5: item.stat_value5,
  itemStatType6: item.stat_type6,
  itemStatValue6: item.stat_value6,
  itemStatType7: item.stat_type7,
  itemStatValue7: item.stat_value7,
  itemStatType8: item.stat_type8,
  itemStatValue8: item.stat_value8,
  itemStatType9: item.stat_type9,
  itemStatValue9: item.stat_value9,
  itemStatType10: item.stat_type10,
  itemStatValue10: item.stat_value10,
  itemDamageMinValue1: item.dmg_min1,
  itemDamageMaxValue1: item.dmg_max1,
  itemDamageType1: item.dmg_type1,
  itemDamageMinValue2: item.dmg_min2,
  itemDamageMaxValue2: item.dmg_max2,
  itemDamageType2: item.dmg_type2,
  itemDamageMinValue3: item.dmg_min3,
  itemDamageMaxValue3: item.dmg_max3,
  itemDamageType3: item.dmg_type3,
  itemDamageMinValue4: item.dmg_min4,
  itemDamageMaxValue4: item.dmg_max4,
  itemDamageType4: item.dmg_type4,
  itemDamageMinValue5: item.dmg_min5,
  itemDamageMaxValue5: item.dmg_max5,
  itemDamageType5: item.dmg_type5,
  itemHolyResistance: item.holy_res,
  itemFireResistance: item.fire_res,
  itemNatureResistance: item.nature_res,
  itemFrostResistance: item.fire_res,
  itemShadowResistance: item.shadow_res,
  itemArcaneResistance: item.arcane_res,
  itemSwingDelay: item.delay,
  itemAmmoType: item.ammo_type,
  itemProcSpellId1: item.spellid_1,
  itemProcSpellCategory1: item.spellcategory_1,
  itemProcSpellCategoryCooldown1: item.spellcategorycooldown_1,
  itemProcTriggerType1: item.spelltrigger_1,
  itemProcCharges1: item.spellcharges_1,
  itemProcPerMinuteRate1: item.spellppmRate_1,
  itemProcCooldown1: item.spellcooldown_1,
  itemProcSpellId2: item.spellid_2,
  itemProcSpellCategory2: item.spellcategory_2,
  itemProcSpellCategoryCooldown2: item.spellcategorycooldown_2,
  itemProcTriggerType2: item.spelltrigger_2,
  itemProcCharges2: item.spellcharges_2,
  itemProcPerMinuteRate2: item.spellppmRate_2,
  itemProcCooldown2: item.spellcooldown_2,
  itemProcSpellId3: item.spellid_3,
  itemProcSpellCategory3: item.spellcategory_3,
  itemProcSpellCategoryCooldown3: item.spellcategorycooldown_3,
  itemProcTriggerType3: item.spelltrigger_3,
  itemProcCharges3: item.spellcharges_3,
  itemProcPerMinuteRate3: item.spellppmRate_3,
  itemProcCooldown3: item.spellcooldown_3,
  itemProcSpellId4: item.spellid_4,
  itemProcSpellCategory4: item.spellcategory_4,
  itemProcSpellCategoryCooldown4: item.spellcategorycooldown_4,
  itemProcTriggerType4: item.spelltrigger_4,
  itemProcCharges4: item.spellcharges_4,
  itemProcPerMinuteRate4: item.spellppmRate_4,
  itemProcCooldown4: item.spellcooldown_4,
  itemProcSpellId5: item.spellid_5,
  itemProcSpellCategory5: item.spellcategory_5,
  itemProcSpellCategoryCooldown5: item.spellcategorycooldown_5,
  itemProcTriggerType5: item.spelltrigger_5,
  itemProcCharges5: item.spellcharges_5,
  itemProcPerMinuteRate5: item.spellppmRate_5,
  itemProcCooldown5: item.spellcooldown_5,
  ifDurabilityThenMaxDurabilityValue: item.MaxDurability,
  ifItemQuestStartId: item.startquest,
  ifItemKeyLockId: item.lockid,
  ifItemContainsGoldThenMinAmount: item.minMoneyLoot,
  ifItemContainsGoldThenMaxAmount: item.MaxMoneyLoot,
  ifItemTemporaryThenDuration: item.duration,
  ifArmorThenValue: item.armor,
  ifShieldThenBlockValue: item.block,
  ifPartOfItemSetThenSetId: item.itemset,
  ifReadableThenPageText: item.PageText,
  ifReadableThenPageMaterial: item.PageMaterial,
  ifReadableThenPageTextLanguageId: item.LanguageID,
  ifContainerThenSlotAmount: item.ContainerSlots,
  ifFoodThenTypeId: item.FoodType,
            } : 'item_not_found';
          })
          .catch((error) => {
            throw new Error(error);
          });
      })
      .catch((error) => {
        throw new Error('Item getById ' + itemId + ' ' + error.message);
      });
  },
  getBySearch: async (query) => {
    return await db.app
      .transaction(async (t) => {
        return await db.app.models.item.findAll({
          where: {  
            name: {
              [Sequelize.Op.like]: `%${query}%`
            } 
          }
        }
        )
          .then((result) => {
            return result.map((item => {
              return({
                id: item.entry,
                name: item.name,
                subClass: item.subclass,
                quality: item.Quality,
                requiredLevel: item.RequiredLevel
              })
            }))
          })
          .catch((error) => {
            throw new Error(error);
          });
      })
      .catch((error) => {
        throw new Error('Search failed:' + query + ' ' + error.message);
      });
  },
  getAllByClassId: async (classId) => {
    return await db.app
    .transaction(async (t) => {
      return await db.app.models.item.findAll({
        where: { 
          class: classId
        }
      }
      )
        .then((result) => {
          return result.map((item => {
            return({
              id: item.entry,
              name: item.name,
              subClass: item.subclass,
              quality: item.Quality,
              requiredLevel: item.RequiredLevel
            })
          }))
        })
        .catch((error) => {
          throw new Error(error);
        });
    })
    .catch((error) => {
      throw new Error('Search failed:' + classId + ' ' + error.message);
    });
  }
}

module.exports = {
  ItemController
};
  // getByName: async (itemName) => {
  //   return world.sequelize
  //     .transaction(async (t) => {
  //       return await world.Item.findOne(
  //         {
  //           where: {
  //             name: itemName,
  //           },
  //         },
  //         { transaction: t },
  //       )
  //         .then((result) => {
  //           return result
  //             ? {
  //               name: result.name,
  //               iata_code: result.iata_code,
  //               country: result.state.country.name,
  //               latitude: result.coordinate.latitude,
  //               longitude: result.coordinate.longitude,
  //             }
  //             : 'point_not_found';
  //         })
  //         .catch((error) => {
  //           throw new DBError(error);
  //         });
  //     })
  //     .catch((error) => {
  //       throw new DBError(`Error in Airport getCoordinates ${error.message}`);
  //     });
  // },
  // getByCoordinate: async (coordinateId) => {
  //   return db.sequelize
  //     .transaction(async (t) => {
  //       return await db.Airport.findOne({
  //         where: {
  //           coordinate_id: coordinateId,
  //         },
  //         include: [
  //           {
  //             model: db.Coordinate,
  //             as: 'coordinates',
  //           },
  //           {
  //             model: db.State,
  //             as: 'state',
  //             include: {
  //               model: db.Country,
  //               as: 'country'
  //             }
  //             // include: [{all: true}]
  //           },
  //         ],
  //       })
  //         .then((result) => {
  //           return result
  //             ? {
  //               name: result.name,
  //               iata_code: result.iata_code,
  //               country: result.state.country.name,
  //               latitude: result.coordinate.latitude,
  //               longitude: result.coordinate.longitude,
  //             }
  //             : 'point_not_found';
  //         })
  //         .catch((error) => {
  //           throw new DBError(error);
  //         });
  //     })
  //     .catch((error) => {
  //       throw new DBError(error);
  //     });
  // },

  // getOperational: async (airportsIds) => {
  //   return db.sequelize.transaction(async (t) => {
  //     return db.Airport.findAll({
  //       where: {
  //         id: airportsIds
  //       },
  //       include: [{all: true, nested: true}]
  //     }, {transaction: t})
  //     .catch(error => {
  //       throw new DBError(error);
  //     })
  //   })
  //   .catch(error => {
  //     throw new DBError(error);
  //   })
  // },

//   getStoredRoutes: async (storedRouteIds) => {
//     return db.sequelize.transaction(async (t) => {
//       return await db.StoredRoute.findAll({
//         where: {
//           route_id: storedRouteIds
//         },
//         include: [{all: true, nested: true}]
//       }, {transaction: t})
//       .catch(error => {
//         throw new DBError(error);
//       })
//     })
//     .catch(error => {
//       throw new DBError(error);
//     })
//   },

//   getWaypointRoutes: async (routesIds) => {
//     return db.sequelize.transaction(async (t) => {
//       return await db.WaypointRoute.findAll({
//         where: {
//           route_id: routesIds
//         },
//         include: [{all: true, nested: true}]
//       }, {transaction: t})
//       .catch(error => {
//         throw new DBError(error);
//       })
//     })
//     .catch(error => {
//       throw new DBError(error);
//     })
//   },
// };