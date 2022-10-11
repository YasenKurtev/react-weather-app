import styled from 'styled-components'

let Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    max-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0;

    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 100%;
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 100%;
    }
`

export default Container;