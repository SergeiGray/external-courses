"use strict";

class Room {
	constructor (applianceList) {
		this.applianceListInRoom = applianceList;
	}
	getPowerConsumptionInRoom () {
		let powerCounter = 0;
		this.applianceListInRoom.forEach( function (appliance) {
			if(appliance.connectionAppliance) {
				powerCounter += appliance.powerAppliance;
			}
		});
		return powerCounter;
	}
	getSortPowerAppliance () {
		return this.applianceListInRoom.sort( (a, b) =>
			a.powerAppliance - b.powerAppliance);
	}
}
class LivingRoom extends Room {
	constructor (applianceList) {
		super();
		this.applianceListInRoom = applianceList;
	}
	findAppliance (nameAppliance) {
		let applianceFlag = false;
		this.applianceListInRoom.forEach( function (appliance) {
			if(appliance.name === nameAppliance) {
				applianceFlag = true;
			}
		});
		return applianceFlag ? `:-) Прибор ${nameAppliance} есть в комнате` : `:-( Прибора ${nameAppliance} нет в комнате`;
	}
}
class Appliance {
	constructor (nameValue, powerValue, connectionValue) {
		this.name = nameValue;
		this.powerAppliance = powerValue;
		this.connectionAppliance = connectionValue;
	}
}

let hairDryer = new Appliance('Фен', 1800, false);
let computer = new Appliance('Компьютер', 65, true);
let conditioner = new Appliance('Кондиционер', 2700, false);
let lamp = new Appliance('Ламп', 100, true);
let vacuumCleaner = new Appliance('Пылесос', 2100, false);

let livingRoom = new LivingRoom([hairDryer, computer, conditioner, lamp, vacuumCleaner]);

console.log(`Мощность приборов в комнате ${livingRoom.getPowerConsumptionInRoom()} ватт`);
console.log(livingRoom.getSortPowerAppliance());
console.log(livingRoom.findAppliance('Фен'));