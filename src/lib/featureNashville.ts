import { featureReduce } from './featureReduce';
const CODE = 'nashville';

export const featureNashvile = (data: any) => {
  const feature = featureReduce(data);

  const {
    [`${CODE}-kepada`]: fKepada,
    [`${CODE}-musik`]: fMusik,
    [`${CODE}-snowflakes`]: fSnowflakes,
    [`${CODE}-sampul`]: fSampul,
    [`${CODE}-pembukaan`]: fPembukaan,
    [`${CODE}-quotes`]: fQuotes,
    [`${CODE}-detailUnduh`]: fDetailUnduh,
    [`${CODE}-detailAkad`]: fDetailAkad,
    [`${CODE}-detailResepsi`]: fDetailResepsi,
    [`${CODE}-countdownTimer`]: fCountdownTimer,
    [`${CODE}-penutupan`]: fPenutupan,
    [`${CODE}-liveWedding`]: fLiveWedding,
    [`${CODE}-turutMengundang`]: fTurutMengundang,
    [`${CODE}-panduanTamu`]: fPanduanTamu,
    [`${CODE}-protokolKesehatan`]: fProtokolKesehatan,
    [`${CODE}-loveStory`]: fLoveStory,
    [`${CODE}-loveQuotes`]: fLoveQuotes,
    [`${CODE}-galleryPhoto`]: fGalleryPhoto,
    [`${CODE}-galleryVideo`]: fGalleryVideo,
    [`${CODE}-kehadiranUcapan`]: fKehadiranUcapan,
    [`${CODE}-ucapanDoa`]: fUcapanDoa,
  } = feature;

  return {
    fKepada,
    fMusik,
    fSnowflakes,
    fSampul,
    fPembukaan,
    fQuotes,
    fDetailUnduh,
    fDetailAkad,
    fDetailResepsi,
    fCountdownTimer,
    fPenutupan,
    fLiveWedding,
    fTurutMengundang,
    fPanduanTamu,
    fProtokolKesehatan,
    fLoveStory,
    fLoveQuotes,
    fGalleryPhoto,
    fGalleryVideo,
    fKehadiranUcapan,
    fUcapanDoa,
  };
};

export const featureNashvileGeneral = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-general`;
  const result = featureReduce(feature[code].column);

  const {
    [`${code}-bgColor`]: generalBgColor,
    [`${code}-colorBody`]: generalColorBody,
    [`${code}-colorPrimary`]: generalColorPrimary,
    [`${code}-bgLeaf`]: generalBgLeaf,
    [`${code}-bgSection1`]: generalBgSection1,
    [`${code}-bgSection2`]: generalBgSection2,
    [`${code}-bgSection3`]: generalBgSection3,
    [`${code}-bgCloud`]: generalbgCloud,
    [`${code}-bgHr`]: generalBgHr,
  } = result;

  return {
    generalBgColor,
    generalColorBody,
    generalColorPrimary,
    generalBgLeaf,
    generalBgSection1,
    generalBgSection2,
    generalBgSection3,
    generalbgCloud,
    generalBgHr,
  };
};

export const featureNashvileKepada = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-kepada`;
  const result = featureReduce(feature[code].column);

  const {
    [`${code}-image`]: kepadaImage,
    [`${code}-title`]: kepadaTitle,
    [`${code}-buttonLabel`]: kepadaButtonLabel,
  } = result;

  return {
    kepadaImage,
    kepadaTitle,
    kepadaButtonLabel,
  };
};

export const featureNashvileMusik = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-musik`;
  const result = featureReduce(feature[code].column);

  const { [`${code}-song`]: musikSong } = result;

  return {
    musikSong,
  };
};

export const featureNashvileSnowflakes = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-snowflakes`;
  const result = featureReduce(feature[code].column);

  const {
    [`${code}-image`]: snowflakesImage,
    [`${code}-total`]: snowflakesTotal,
  } = result;

  return {
    snowflakesImage,
    snowflakesTotal,
  };
};

export const featureNashvileSampul = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-sampul`;
  const result = featureReduce(feature[code].column);

  const {
    [`${code}-bgImage`]: sampulBgImage,
    [`${code}-bgGradient`]: sampulBgGradient,
    [`${code}-title`]: sampulTitle,
    [`${code}-nicknameGroom`]: sampulNicknameGroom,
    [`${code}-and`]: sampulAnd,
    [`${code}-nicknameBridge`]: sampulNicknameBride,
    [`${code}-subTitle`]: sampulSubTitle,
    [`${code}-date`]: sampulDate,
  } = result;

  return {
    sampulBgImage,
    sampulBgGradient,
    sampulTitle,
    sampulNicknameGroom,
    sampulAnd,
    sampulNicknameBride,
    sampulSubTitle,
    sampulDate,
  };
};
