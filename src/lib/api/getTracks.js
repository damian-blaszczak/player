import once from "../utils/once";

const timeoutPromise = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// mock api
export const getTracks = async() => {
  await timeoutPromise(1000);
  return [
    {
      id: 1,
      name: 'Upadek gigantów',
      image: 'https://static.audioteka.com/pl/images/products/ken-follett/upadek-gigantow-1-duze.jpg',
      track: 'https://static.audioteka.com/pl/content/samples/ken-follett/upadek-gigantow-1.mp3'
    }, {
      id: 2,
      name: 'Sherlock Holmes',
      image: 'https://static.audioteka.com/pl/images/products/bartosz-szpak/sherlock-holmes---odcienie-czerni-duze.jpg',
      track: 'https://static.audioteka.com/pl/content/samples/bartosz-szpak/sherlock-holmes---odcienie-czerni.mp3'
    }, {
      id: 3,
      name: 'Sierżant Cuff',
      image: 'https://static.audioteka.com/pl/images/products/kinga-krzeminska/sierzant-cuff-duze.jpg',
      track: 'https://static.audioteka.com/pl/content/samples/kinga-krzeminska/sierzant-cuff.mp3'
    }, {
      id: 4,
      name: 'Solaris',
      image: 'https://static.audioteka.com/pl/images/products/stanislaw-lem/solaris-superprodukcja-duze.jpg',
      track: 'https://static.audioteka.com/pl/content/samples/stanislaw-lem/solaris-superprodukcja.mp3'
    }, {
      id: 5,
      name: 'Zwierciadło piekieł',
      image: 'https://static.audioteka.com/pl/images/products/graham-masterton/zwierciadlo-piekiel-superprodukcja-duze.jpg',
      track: 'https://static.audioteka.com/pl/content/samples/graham-masterton/zwierciadlo-piekiel-superprodukcja.mp3'
    }
  ]
}

export const getTracksOnce = once(getTracks);
