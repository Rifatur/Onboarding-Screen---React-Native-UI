import React from 'react';
import { View,Text,SafeAreaView,StyleSheet, Animated ,Image } from 'react-native';
import { images } from '../../contsants';
import COLORS, { SIZES } from '../../contsants/theme';

const {onboarding1,onboarding2,onboarding3} = images;

const onBoardings = [
    {
        
        title:"Lets Travelling",
        description:"this is Nice place to visit with family or friend this is Nice place to visit with family or friend",
        img: onboarding1,
    },
    {
       
        title:"Navigation",
        description:"this is Nice place to visit with family or friend  this is Nice place to visit with family or friend",
        img: onboarding2,
    },
    {
        
        title:"Destination",
        description:" this is Nice place to visit with family or friend this is Nice place to visit with family or friend",
        img: onboarding3,
    }
]





const OnBoarding = () => {

    function renderContent(){
        return(
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
        >
            {onBoardings.map((item, index) =>(
                <View key={index} style={{width:SIZES.width,justifyContent:'center',alignItems:'center'}}>
                    {/*Image*/}
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            source={item.img}
                            resizeMode="cover"
                            style={{
                                width:450,
                                height:450
                            }}
                        />
                    </View>
                    {/*Text*/}
                    <View style={{
                            position:'absolute',
                            bottom:'10%',
                            width:'80%'
                    }}>
                        <Text style={{color:COLORS.secondary,fontSize:SIZES.h1,textAlign:'center'}}> {item.title} </Text>
                        <Text style={{color:'#456',fontSize:SIZES.h3,textAlign:'center',marginTop:SIZES.body3}}> {item.description} </Text>
                    </View>        

                </View>
            ))}
        </Animated.ScrollView>
        );
    }

    function RenderDots(){
        return(
            <View style={{flexDirection:'row',height:SIZES.padding,}}>
                {onBoardings.map((item, index) =>(
                   
                        <View key={`dot-${index}`}  style={[styles.dot,{width:20, height:20}]}>

                        </View>
                    
                ))}
            </View>
        );
    }


  return(

      <SafeAreaView style={styles.container}>
          <View>
            { renderContent() }
          </View>

          <View style={styles.DotRootSection}>
            {RenderDots()}
          </View>
        
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: COLORS.white,
    },
    DotRootSection:{
        position:'absolute',
        bottom:SIZES.height > 700 ?'22%':'16%'
    },
    dot:{
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.secondary,
        marginHorizontal:SIZES.radius/2,
        
    }
})

export default OnBoarding;