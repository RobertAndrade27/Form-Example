import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import InputText from './Components/InputText.js';
import { Formik } from 'formik';
import Axios from 'axios';

export default function FormDados() {
  function onSubmitDados() {
    console.log('Submit daados');
  }

  const onChangeCep = (cep, setFieldValue) => {
    Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.data.erro) {
          const { uf, localidade, bairro, logradouro } = response.data;
          setFieldValue('cep', cep);
          setFieldValue('uf', uf);
          setFieldValue('cidade', localidade);
          setFieldValue('bairro', bairro);
          setFieldValue('endereco', logradouro);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          nome_completo: '',
          cpf: '',
          rg: '',
          cep: '',
          uf: '',
          cidade: '',
          bairro: '',
          endereco: '',
          complemento: '',
          numero: '',
          telefone: '',
          celular: '',
          email: '',
          situacao: 'A',
        }}
        onSubmit={onSubmitDados}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <InputText
                  fullWidth
                  label="Nome Completo"
                  name="nome"
                  onChange={handleChange}
                  type="text"
                  value={values.nome}
                />
              </Grid>
              <Grid item md={3}>
                <InputText
                  fullWidth
                  label="CPF"
                  name="cpf"
                  onChange={handleChange}
                  type="text"
                  value={values.cpf}
                />
              </Grid>
              <Grid item md={3}>
                <InputText
                  fullWidth
                  label="RG"
                  name="rg"
                  onChange={handleChange}
                  type="text"
                  value={values.rg}
                />
              </Grid>
              <Grid item md={6}>
                <InputText
                  fullWidth
                  label="E-mail"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={values.email}
                />
              </Grid>
              <Grid item md={3}>
                <InputText
                  fullWidth
                  label="Telefone"
                  name="telefone"
                  onChange={handleChange}
                  type="text"
                  value={values.telefone}
                />
              </Grid>
              <Grid item md={3}>
                <InputText
                  fullWidth
                  label="Celular"
                  name="celular"
                  onChange={handleChange}
                  type="text"
                  value={values.celular}
                />
              </Grid>
              <Grid item md={3}>
                <InputText
                  fullWidth
                  label="CEP"
                  name="cep"
                  onChange={handleChange}
                  onBlur={(e) => onChangeCep(e.target.value, setFieldValue)}
                  debounceTime={800}
                  type="text"
                  value={values.cep}
                />
              </Grid>
              <Grid item md={5}>
                <InputText
                  fullWidth
                  name="endereco"
                  label="Endereço"
                  value={values.endereco}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={2}>
                <InputText
                  fullWidth
                  label="Número"
                  name="numero"
                  onChange={handleChange}
                  type="text"
                  value={values.numero}
                />
              </Grid>
              <Grid item md={2}>
                <InputText
                  fullWidth
                  name="uf"
                  label="UF"
                  disabled
                  value={values.uf}
                />
              </Grid>
              <Grid item md={5}>
                <InputText
                  fullWidth
                  name="cidade"
                  label="Cidade"
                  value={values.cidade}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4}>
                <InputText
                  fullWidth
                  name="bairro"
                  label="Bairro"
                  value={values.bairro}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item md={3}>
                <InputText
                  fullWidth
                  multiline
                  label="Complemento"
                  name="complemento"
                  onChange={handleChange}
                  value={values.complemento}
                />
              </Grid>
            </Grid>
            <Divider style={{ marginTop: '0.4em' }} />
          </form>
        )}
      </Formik>
    </>
  );
}
