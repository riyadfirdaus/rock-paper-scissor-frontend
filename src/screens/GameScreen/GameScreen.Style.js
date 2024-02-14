import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  fullName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textKalimat: {
    fontSize: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: windowWidth * 0.9,
  },
  choiceCard: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    marginBottom: 10,
  },
  choiceImage: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    alignItems: "center",
    width: windowWidth * 0.9,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
  button: {
    borderRadius: 25,
    overflow: "hidden", // Untuk memastikan gradient tetap di dalam batas border radius
    // marginTop: 20,
    top: "10%",
  },
  gradient: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
};
