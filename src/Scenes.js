'use strict';
import React, { Component } from 'react';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import Home from './containers/home/Home';
import Planes from './containers/planes/Planes';
import Aportes from './containers/aportes/Aportes';
import Faq from './containers/faq/Faq';
import Contacto from './containers/contacto/Contacto';


export const scenes = Actions.create(
<Scene key="modal" component={Modal} >
  <Scene key="root" navigationBarStyle={{ backgroundColor:'#4F8EF7' }}>
      <Scene key="inicio" component={Home} initial={true} title="Inicio"/> 
      <Scene key="planes" component={Planes} title="Planes"/> 
      <Scene key="aportes" component={Aportes} title="Calcula tus aportes"/> 
      <Scene key="faq" component={Faq} title="Faq"/> 
      <Scene key="contacto" component={Contacto} title="Contacto"/>  
  </Scene>
</Scene>  
);


