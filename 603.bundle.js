"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[603],{3603:(t,o,e)=>{e.r(o),e.d(o,{AmbientLight:()=>s});var i=e(7675);class s extends i._{constructor(t,o){super(t,o),this.type="AmbientLight"}}s.prototype.isAmbientLight=!0},7675:(t,o,e)=>{e.d(o,{_:()=>n});var i=e(3802),s=e(7282);class n extends i.T{constructor(t,o=1){super(),this.type="Light",this.color=new s.Color(t),this.intensity=o}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const o=super.toJSON(t);return o.object.color=this.color.getHex(),o.object.intensity=this.intensity,void 0!==this.groundColor&&(o.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(o.object.distance=this.distance),void 0!==this.angle&&(o.object.angle=this.angle),void 0!==this.decay&&(o.object.decay=this.decay),void 0!==this.penumbra&&(o.object.penumbra=this.penumbra),void 0!==this.shadow&&(o.object.shadow=this.shadow.toJSON()),o}}n.prototype.isLight=!0}}]);