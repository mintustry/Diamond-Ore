const SpoNavT4 = extendContent(UnitType, "charybdis", {
});
SpoNavT4.constructor = () => extend(UnitWaterMove, {
	update(){
		this.super$update();
		this.heal(1.8);
	},
});
//SpoNavT4.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 60 * 6, 60 * 9, 64));
SpoNavT4.ammoType = AmmoTypes.powerHigh;

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "diamond-ore-scylla"), Vars.content.getByName(ContentType.unit, "diamond-ore-charybdis")]);
Blocks.exponentialReconstructor.upgrades.add(upgrade.toArray(UnitType));
