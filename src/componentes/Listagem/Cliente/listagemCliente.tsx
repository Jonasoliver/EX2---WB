import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Seletor from "../../Seletor/seletor";

interface State {
    selectedOption: string | null;
    selectedGender: string | null;
}

export default class ListagemCliente extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedOption: null,
            selectedGender: null
        };
    }

    handleOptionChange = (selectedOption: string) => {
        this.setState({ selectedOption, selectedGender: null });
    };

    handleGenderChange = (selectedGender: string) => {
        this.setState({ selectedGender });
    };

    render() {
        const options = [ 
            { value: '1', label: 'Listar todos os clientes' },
            { value: '2', label: 'Listar todos os clientes por gênero' },
            { value: '3', label: 'Listar cliente específico (por CPF)' },
            { value: '4', label: 'Listar os 10 clientes que mais consumiram produtos ou serviços (quantidade)' },
            { value: '5', label: 'Listar os 10 clientes por gênero' },
            { value: '6', label: 'Listar os 10 clientes que menos consumiram produtos ou serviços' },
            { value: '7', label: 'Listar os 5 clientes que mais consumiram em valor' }
        ];

        const { selectedOption, selectedGender } = this.state;

        let content = null;

        if (selectedOption === '1') {
            content = <div>Aqui vai a lista de todos os clientes...</div>;
        } else if (selectedOption === '2') {
            const genderOptions = [
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Feminino', label: 'Feminino' },
                { value: 'Outros', label: 'Outros' }
            ];
            content = (
                <div>
                    <Seletor options={genderOptions} onChange={this.handleGenderChange} />
                    {selectedGender && <div>Aqui vai a lista de todos os clientes do gênero {selectedGender}...</div>}
                </div>
            );
        } else if (selectedOption === '3') {
            content = <div>Aqui vai a busca de cliente por CPF...</div>;
        } else if (selectedOption === '4') {
            content = <div>Aqui vai a lista dos 10 clientes que mais consumiram produtos ou serviços (quantidade)...</div>;
        } else if (selectedOption === '5') {
            const genderOptions = [
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Feminino', label: 'Feminino' },
                { value: 'Outros', label: 'Outros' }
            ];
            content = (
                <div>
                    <Seletor options={genderOptions} onChange={this.handleGenderChange} />
                    {selectedGender && <div>Aqui vai a lista dos 10 clientes do gênero {selectedGender}...</div>}
                </div>
            );
        } else if (selectedOption === '6') {
            content = <div>Aqui vai a lista dos 10 clientes que menos consumiram produtos ou serviços...</div>;
        } else if (selectedOption === '7') {
            content = <div>Aqui vai a lista dos 5 clientes que mais consumiram em valor...</div>;
        }

        return(
            <div>
                <Seletor options={options} onChange={this.handleOptionChange} />
                {content}
            </div>
        );
    }
}
