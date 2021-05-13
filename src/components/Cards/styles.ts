  import styled from '@emotion/styled'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    top: 40%;
    width: 100%;
    transform: translateY(-50%);
  `

  export const Image = styled.img`
    margin-bottom: 3em;
    width: 20em;
    align-self: center;
  `;

export const CardWrapper = styled.div`
    margin-left: 1em;
    margin-right: 1em;
`;

export const Content = styled.div<{ translateX : number }>`
    display: flex;
    transition-property: transform;
    
    transition-duration: 0.8s;
    transition-timing-function: ease;
    transform: ${props => `translateX(${props.translateX}em)`};
`;


export const Text = styled.div`
    cursor: pointer;
    align-self: center;
    margin-top: 3em;
    font-size: 1.5em;
    font-weight: bold;
  `