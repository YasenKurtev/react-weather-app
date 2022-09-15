import styled from 'styled-components'

let Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    max-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 576px){
        width: 100%;
    }

    @media (max-width: 768px){
        width: 100%;
    }

    @media (max-width: 992px){
        width: 100%;
    }

    @media (max-width: 1200px){
        width: 100%;
    }
`

export default Container