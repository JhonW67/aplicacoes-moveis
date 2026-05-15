import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constant";

export const styles = StyleSheet.create({
    cardTitle: {
    fontSize: THEME.text.heading.h2,
    color: '#f8fbff',
    fontWeight: "bold",
  },
   cardText: {
    fontSize: 16,
    color: '#f8fbff',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#ffffff',
  },
  cardTitleRole:{
   color: '#f8fbff',
    fontSize: THEME.text.heading.h4,
    fontWeight: "bold",
  },
  cardBadgeText: {
    color: '#000000',
    fontWeight: "bold",
    letterSpacing: 1,
  },

})