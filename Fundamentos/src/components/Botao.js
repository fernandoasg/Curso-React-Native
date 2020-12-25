import React from 'react'
import { Button } from 'react-native'
import Estilo from './estilo'

export default props => {

    function executar(){
        console.warn('Exec!!!')
    }

    return (
        <>
            <Button 
                title="Executar!"
                onPress={executar}
            />
            <Button 
                title="Executar2!"
                onPress={function(){
                    console.warn('Exec #02!!!')
                }}
            />
        </>
    )
}