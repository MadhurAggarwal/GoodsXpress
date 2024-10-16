import { ImageSourcePropType } from "react-native";

export type images = {
  authBg: ImageSourcePropType;
  line: ImageSourcePropType;
  homeBanner: ImageSourcePropType;
  homeBannerTwo: ImageSourcePropType;
  user: ImageSourcePropType;
  profileUser: ImageSourcePropType;
  rideDetail: ImageSourcePropType;
  outStation: ImageSourcePropType;
  rideBg: ImageSourcePropType;
  destination: ImageSourcePropType;
  bookRide: ImageSourcePropType;
  trip: ImageSourcePropType;
  destinationDark: ImageSourcePropType;
  bgDarkOnboard: ImageSourcePropType;
  authBgDark: ImageSourcePropType;
  bgOnboarding: ImageSourcePropType;
};

// const Images: images = {
//   authBg: require("../../assets/images/authImage/authBg.png"),
//   line: require("../../assets/images/gif/line.gif"),
//   homeBanner: require("../../assets/images/homeScreenImage/homeBanner.png"),
//   homeBannerTwo: require("../../assets/images/homeScreenImage/homeBannerTwo.png"),
//   user: require("../../assets/images/homeScreenImage/user.png"),
//   profileUser: require("../../assets/images/profileImage/profileUser.png"),
//   rideDetail: require("../../assets/images/rideScreen/rideDetail.png"),
//   outStation: require("../../assets/images/categoryScreen/outstation.png"),
//   rideBg: require("../../assets/images/categoryScreen/rideBg.png"),
//   destination: require("../../assets/images/onBoarding/destination.png"),
//   bookRide: require("../../assets/images/onBoarding/bookRide.png"),
//   trip: require("../../assets/images/onBoarding/trip.png"),
//   destinationDark: require("../../assets/images/onBoarding/destinationDark.png"),
//   bgDarkOnboard: require("../../assets/images/onBoarding/bgDarkOnboard.png"),
//   authBgDark: require("../../assets/images/authImage/authBgDark.png"),
//   bgOnboarding: require('../../assets/images/onBoarding/bgOnboarding.png'),
// };

const Images: images = {
  authBg: {uri: 'https://i.ibb.co/rHQxrFC/authBg.png'},
  authBgDark: { uri: 'https://i.ibb.co/dD3rBFk/auth-Bg-Dark.png' },
  line: {uri: 'https://i.ibb.co/Tt1xR6S/line.gif'},
  homeBanner: {uri: 'https://i.ibb.co/gPR8h8X/home-Banner.png'},
  homeBannerTwo: {uri: 'https://i.ibb.co/kmWnYKw/home-Banner-Two.png'},
  user: {uri: '../../assets/images/homeScreenImage/user.png'},
  profileUser: { uri: '../../assets/images/profileImage/profileUser.png' },
  rideDetail: { uri: 'https://i.ibb.co/ZGpGtkj/ride-Detail.png' },
  outStation: { uri: 'https://i.ibb.co/54Wf21B/outstation.png' },
  rideBg: { uri: 'https://i.ibb.co/CmJ0dzm/rideBg.png' },
  bookRide: { uri: 'https://i.ibb.co/T2zNywP/bookRide.png' },
  trip: { uri: 'https://i.ibb.co/KWbCRh6/trip.png' },
  // destination: { uri: 'https://i.ibb.co/FzM0Wyt/destination.png' },
  destination: { uri: 'https://i.ibb.co/wp2YqQS/coverimage.jpg' },
  destinationDark: { uri: 'https://i.ibb.co/wp2YqQS/coverimage.jpg' },
  // destinationDark: { uri: 'https://i.ibb.co/GkbR3hM/destination-Dark.png' },
  bgDarkOnboard: { uri: 'https://i.ibb.co/z7qZhtP/bg-Dark-Onboard.png' },
  bgOnboarding: { uri: 'https://i.ibb.co/sqKYjns/bg-Onboarding.png' },
};
export default Images;
