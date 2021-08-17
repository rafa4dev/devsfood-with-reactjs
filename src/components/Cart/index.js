import React from 'react';
import * as S from './styled';

export default () => {
    return (
        <S.CartArea>
            <S.CartHeader>
                <S.CartIcon src="/assets/cart.png" />
                <S.CartText>Meu carrinho (x)</S.CartText>
            </S.CartHeader>
            <S.CartBody>

            </S.CartBody>
        </S.CartArea>
    )
}