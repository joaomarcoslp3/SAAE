import React from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SAAEweb() {
  const renderLoading = () => {
    <ActivityIndicator style= {{flex: 1}} animating color = "#004384" size = "large"/>
  }

  return (
    <WebView
    startInLoadingState = { true }
    renderLoading = { renderLoading } 
    scalesPageToFit= {false}
    source={{uri: 'http://autoatendimento.prosanearinfo.com.br/v5.0/index.php?id=A3AQ33E'}}
  />
  );
}
