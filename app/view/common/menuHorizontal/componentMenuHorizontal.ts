// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';
import { ComponentCenterHolder } from './centerHolder/componentCenterHolder';
import { ComponentLeftHolder } from './leftHolder/componentLeftHolder';
import { ComponentRightHolder } from './rightHolder/componentRightHolder';

export class ComponentMenuHorizontal extends Component{
  class: string;
  arrayCenterHolder: Array<ComponentCenterHolder>;
  arrayLeftHolder: Array<ComponentLeftHolder>;
  arrayRightHolder: Array<ComponentRightHolder>;

  constructor(father?: Component){
    super(father);
    this.arrayLeftHolder = new Array<ComponentLeftHolder>();
    this.arrayLeftHolder.type = ComponentLeftHolder;
    this.arrayCenterHolder = new Array<ComponentCenterHolder>();
    this.arrayCenterHolder.type = ComponentCenterHolder;
    this.arrayRightHolder = new Array<ComponentRightHolder>();
    this.arrayRightHolder.type = ComponentRightHolder;
  }
}