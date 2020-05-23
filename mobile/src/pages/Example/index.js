import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";

import api from "../../services/api";

import styles from "./styles";

export default function Example() {
  const [example, setExample] = useState("");

  useEffect(() => {
    api.get("").then((response) => {
      setExample(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{example}</Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>React native initial.</Text>
    </View>
  );
}
