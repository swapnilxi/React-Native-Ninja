import { View, Text, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { SIZES, FONTS,COLORS, SHADOWS,assets } from '../constants'
import { personImgUrls } from '../constants/assets';
import { PersonData } from '../constants/personApi';


export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const ETHPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};


 export const ImageCmp = ({imgUrl, index }) => {
    // Determine if imgUrl is a local image (number) or a remote URL (string)
  const imageSource = typeof imgUrl === 'number' ? imgUrl : { uri: imgUrl };

  return (
    <View>
      <Image source={imageSource}
      style={{
        width:48,
        height:48,
        //overlap of image except 1st
         marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
      />
    </View>
  )
 }

export const People = () => { 

  // const [people, setPeople] = useState([]);

  //  useEffect(() => {
  //   const fetchPeople = async () => {
  //     const data = await PersonData();
  //     setPeople(data.slice(0, 3)); // Take only the first 3 people
  //   };
  //   fetchPeople();
  // }, []);

  return (
  <View style={{flexDirection:'row'}}>
      {/* 
          <View style={Styles.people}>
      {
        [assets.person02, assets.person03, assets.person04]
        .map( (imgUrl, index)=>
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        )
      }
    </View> */}
      
    <View style={Styles.people}>
    {personImgUrls.map((imgUrl, index) => (
    <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
    ))}
    </View>

      {/* //api images//
    <View style={Styles.people}>
    {people.map((person, index) => (
      <ImageCmp imgUrl={person.imageUrl} index={index} key={`People-${index}`} />
    ))}
  </View>
    */}

</View>
  )
}
export const EndDate = () => {
  return (
    <View style={Styles.endDate}>
      <Text style={Styles.endDateTitleText}>EndDate </Text>
      <Text style={Styles.endDateText}>12h 30m </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={Styles.subInfo}>
      {/* <Text>SubInfo</Text> */}
      <People/>
      <EndDate/>
    </View>
  )
}

const Styles={
  subInfo:{
    width:"100%",
    marginTop: -SIZES.extraLarge,
    paddingHorizontal: SIZES.font,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  people:{
    flexDirection:"row",
  },
  endDate:{
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    alignItems:'center',
    justifyContent:'center',
    ...SHADOWS.light,
    elevation:1,
    maxWidth:'50%',
    borderRadius:SIZES.font,
    backgroundColor:COLORS.white,
  },
  endDateTitleText:{
   fontFamily:FONTS.semiBold,
   fontSize:SIZES.small,
   color:COLORS.primary,
  },
  endDateText:{
    fontFamily:FONTS.semiBold,
    fontSize:SIZES.medium,
    color:COLORS.primary,

  },
}