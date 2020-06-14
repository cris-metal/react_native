import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

const parouimpar = num => num %2 == 0 ? <Text style={Padrao.ex}>Par</Text> : <Text style={Padrao.ex}>Ímpar</Text>

export default props => 
    <View>
        {parouimpar(props.numero)}
        <If test={props.numero %2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero %2 == 1}>
            <Text style={Padrao.ex}>Ímpar</Text>
        </If>
    </View>