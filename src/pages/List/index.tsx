import React from 'react'

import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'

import { 
    Container,
    Content,
    Filters
} from './styles'

const List: React.FC = () => {

    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'}
    ]

    const years = [
        {value: 2022, label: 2022},
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
        {value: 2017, label: 2017},
        {value: 2016, label: 2016},
        {value: 2015, label: 2015},
        {value: 2014, label: 2014},
        {value: 2013, label: 2013},
        {value: 2012, label: 2012}
    ]

    return (
        <Container>
            <ContentHeader title='Saídas' lineColor="#e44c4e">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button
                    type='button'
                    className='tag-filter tag-filter-recurrent'
                >
                    Recorrentes
                </button>
                <button
                    type='button'
                    className='tag-filter tag-filter-eventual'
                >
                    Eventual
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor='#e44c4e'
                    title='Conta de Luz'
                    subtitle='07/03/2022'
                    amount='R$ 130,00'
                />
            </Content>
        </Container>
    )
}

export default List