import React, { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useAuth } from '../../hooks/AuthContext';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Background, Container, Content, AnimationContainer } from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signOut } = useAuth();
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber Logomarca" />

          <Form ref={formRef} onSubmit={signOut}>
            <h1>Dashboard</h1>
            <h1></h1>
            <Button type="submit">Sair</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
