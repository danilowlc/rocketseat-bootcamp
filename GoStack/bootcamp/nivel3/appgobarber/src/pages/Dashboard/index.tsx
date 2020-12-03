import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native';

import { Container, Title } from './styles';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Dashboard</Title>
            </View>
            <Button style={{ width: 250 }} onPress={signOut}>
              Sair
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Dashboard;
