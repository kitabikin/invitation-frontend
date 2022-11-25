import { featureReduce } from './featureReduce';
const CODE = 'hazel';

export const feature = (data: any) => {
  const feature = featureReduce(data);

  const {
    [`${CODE}-general`]: fGeneral,
    [`${CODE}-kepada`]: fTo,
    [`${CODE}-musik`]: fMusic,
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
    fGeneral,
    fTo,
    fMusic,
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

export const featureGeneral = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-kepada`;
  const {
    [`${code}-theme`]: generalTheme,
    [`${code}-orderGroomBridge`]: generalOrderGroomBridge,
  } = feature;

  return {
    generalTheme,
    generalOrderGroomBridge,
  };
};

export const featureTo = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-kepada`;
  const {
    [`${code}-image`]: toImage,
    [`${code}-title`]: toTitle,
    [`${code}-buttonLabel`]: toButtonLabel,
  } = feature;

  return {
    toImage,
    toTitle,
    toButtonLabel,
  };
};

export const featureMusic = (data: any) => {
  const feature = featureReduce(data);

  const code = `${CODE}-musik`;
  const { [`${code}-song`]: musicSong } = feature;

  return {
    musicSong,
  };
};
