"use client";

import * as S from "./style";
const Footer = () => {
  const { addresses, ceo, policy, contact, businessNumbers } = {
    addresses: [
      "(대구) 대구광역시 동구 장등로 56, 112호(신천동, 벤처오피스텔)",
      "(경북) 경북 경산시 압량읍 압량큰길 202호",
      "(서울) 서울특별시 금천구 디지털로9길 99, 1401-15호",
    ],
    ceo: "대표이사 : 이인수",
    policy: "개인정보책임관리자 : 이인수",
    contact: {
      tel: "TEL: 053-719-0345",
      fax: "FAX: 053-719-0345",
    },
    businessNumbers: ["372-86-01664(대구)", "573-85-01256(경북)"],
  };

  return (
    <S.FooterLayout>
      <S.LeftBox>
        <img src="/footerLogo.svg" alt="Univalue Logo" />
        <S.Address>
          <p>주소</p>
          {addresses.map((address, index) => (
            <div key={index}>{address}</div>
          ))}
        </S.Address>
      </S.LeftBox>
      <S.RightBox>
        <p>{ceo}</p>
        <p>{policy}</p>
        <S.RowBox>
          <S.Contact>
            <p>연락처</p>
            <p>{contact.tel}</p>
            <p>{contact.fax}</p>
          </S.Contact>
          <S.BusinessNumbers>
            <p>사업자등록번호</p>
            {businessNumbers.map((number, index) => (
              <p key={index}>{number}</p>
            ))}
          </S.BusinessNumbers>
        </S.RowBox>
      </S.RightBox>
    </S.FooterLayout>
  );
};

export default Footer;
