import React from 'react';
import * as services from '../../services/usuarioServices';

class Register extends React.Component {

    //método construtor
    constructor(props) {
        super(props);

        //declarando o state do componente..
        this.state = {
            nome: '', email: '', senha: '', senhaConfirmacao: '',
            disabledElements: false,
            messages: { success: '', error: '' },
            validationErrors: { nome: [], email: [], senha: [], senhaConfirmacao: [] }
        }

        //Para que uma função possa acessar o conteudo do state, ela deve
        //ser registrada (bind) dentro do construtor do componente
        this.handleNome = this.handleNome.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSenha = this.handleSenha.bind(this);
        this.handleSenhaConfirmacao = this.handleSenhaConfirmacao.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //função para ler o valor preenchido no campo nome..
    handleNome(e) { this.setState({ nome: e.target.value }); }
    //função para ler o valor preenchido no campo email..
    handleEmail(e) { this.setState({ email: e.target.value }); }
    //função para ler o valor preenchido no campo senha..
    handleSenha(e) { this.setState({ senha: e.target.value }); }
    //função para ler o valor preenchido no campo senhaConfirmacao..
    handleSenhaConfirmacao(e) { this.setState({ senhaConfirmacao: e.target.value }); }

    //função para limpar os campos do formulário
    handleReset(e) {
        this.setState({ nome: '', email: '', senha: '', senhaConfirmacao: '' })
    }

    //função executada no evento submit do formulário
    handleSubmit(e) { //e -> representa o elemento HTML que executou a função
        //anular o submit do formulário
        e.preventDefault();

        //acessando o conteudo do state..
        this.setState({
            disabledElements: true,
            messages: { success: '', error: '' },
            validationErrors: { nome: [], email: [], senha: [], senhaConfirmacao: [] }
        });

        var request = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            senhaConfirmacao: this.state.senhaConfirmacao
        }

        //executando o método post do arquivo usuarioServives.js
        services.post(request)
            .then( //promisse de sucesso
                data => {

                    this.setState({
                        messages: { success: data },
                        disabledElements: false,
                        nome: '',
                        email: '',
                        senha: '',
                        senhaConfirmacao: ''
                    })
                }
            )
            .catch( //promisse de erro
                e => {

                    switch (e.response.status) {
                        case 400: //erros de validação
                            var errors = e.response.data.errors;

                            this.setState({
                                validationErrors: {
                                    nome: errors.Nome || [],
                                    email: errors.Email || [],
                                    senha: errors.Senha || [],
                                    senhaConfirmacao: errors.SenhaConfirmacao || []
                                }
                            })

                            break;

                        case 500: //internal server error
                            this.setState({
                                messages: {
                                    error: e.response.data
                                }
                            });
                            break;
                    }

                    this.setState({
                        disabledElements: false
                    })
                }
            );
    }

    //método para renderizar o conteudo HTML do componente..
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h5>Cadastro de Conta de Usuário</h5>

                    {
                        this.state.messages.success ?
                            <div className="text-success mb-2">
                                <strong>{this.state.messages.success}</strong>
                            </div>
                            : <div></div>
                    }

                    {
                        this.state.messages.error ?
                            <div className="text-danger mb-2">
                                <strong>{this.state.messages.error}</strong>
                            </div>
                            : <div></div>
                    }

                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Nome do Usuário:</label>
                            <input type="text" className="form-control"
                                placeholder="Ex: João Carlos"
                                onChange={this.handleNome}
                                value={this.state.nome}
                                disabled={this.state.disabledElements} />
                            <ul className="text-danger">
                                {
                                    this.state.validationErrors.nome.map(
                                        function (item, i) {
                                            return (
                                                <li key={i}>
                                                    <small>{item}</small>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="form-group">
                            <label>Email de Acesso:</label>
                            <input type="email" className="form-control"
                                placeholder="Ex: joaocarlos@gmail.com"
                                onChange={this.handleEmail}
                                value={this.state.email}
                                disabled={this.state.disabledElements} />
                            <ul className="text-danger">
                                {
                                    this.state.validationErrors.email.map(
                                        function (item, i) {
                                            return (
                                                <li key={i}>
                                                    <small>{item}</small>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="form-group">
                            <label>Senha de Acesso:</label>
                            <input type="password" className="form-control"
                                placeholder="Digite aqui"
                                onChange={this.handleSenha}
                                value={this.state.senha}
                                disabled={this.state.disabledElements} />
                            <ul className="text-danger">
                                {
                                    this.state.validationErrors.senha.map(
                                        function (item, i) {
                                            return (
                                                <li key={i}>
                                                    <small>{item}</small>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="form-group">
                            <label>Confirme a Senha:</label>
                            <input type="password" className="form-control"
                                placeholder="Digite aqui"
                                onChange={this.handleSenhaConfirmacao}
                                value={this.state.senhaConfirmacao}
                                disabled={this.state.disabledElements} />
                            <ul className="text-danger">
                                {
                                    this.state.validationErrors.senhaConfirmacao.map(
                                        function (item, i) {
                                            return (
                                                <li key={i}>
                                                    <small>{item}</small>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Realizar Cadastro"
                                className="btn btn-success mr-2"
                                disabled={this.state.disabledElements} />
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Register;