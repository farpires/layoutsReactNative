import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contents}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contents: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box1: {
    padding: 20,
    backgroundColor: 'navy',
  },
  box2: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  box3: {
    padding: 20,
    backgroundColor: 'green',
  },
  box4: {
    padding: 20,
    backgroundColor: 'teal',
  },
});

export default App;



// FlexBox
//  flex: 1, aumenta todo lo que pueda crecer
//  flex: 1, crecera todo lo que pueda si es que el padre, no tienen colocado
/*
    PADRE: flex: 1
    |
    |____HIJO: flex: 1,padding: 20,
    |____HIJO: flex: 1,padding: 20,
    |____HIJO: flex: 1,padding: 20,
    |____HIJO: flex: 2,padding: 20, este box sera mucho mas grande ya que contiene un flex: 2.
*/
// flexDirection: 'column',           // por defecto
// flexDirection: 'column-reverses',  // todos los elemento para abajo
// flexDirection: 'row,               // elemento a la izquierda
// flexDirection: 'row-reverse',      // elemento a la derecha

// flexDirection: 'row',
// justifyContent: 'center' corre los box al medio,
// justifyContent: 'flex-end',corre los box a la derecha
// justifyContent: 'flex-start',corre los box a la izquierda === que si no esta (default)
// justifyContent: 'space-between',distribuye los box por igual pero tomando los dos extrema derecha-izquierda
// justifyContent: 'space-evenly',Idem al anterior sin tomar los extremos
// justifyContent: 'space-around', similar al anterior , los espacios son diferentes

//  alignItems: 'flex-start', los box se colocan en la posicion de arriba,
//  alignItems: 'flex-end', los box se colocan al final
//  alignItems: 'center', los box se centran
//  alignItems: 'stretch', estos es lo mimso por default

//  puede centrar vertical y horizontal con:(en row)
/*
    justifyContent: 'center',
    alignItems: 'center',
*/

// puede centrar vertical y horizontal con:(en clomun)
/*
    flexDirection: 'column',
    justifyContent: 'center',
*/
//CUIDADO esto te puede confundir
/*
  flexDirection: 'column',
  alignItems: 'center',
*/