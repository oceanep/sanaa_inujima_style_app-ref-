const schema = {
  site1: {
    name: "Museum",
    info: "Museum designed and architected by Sanaa",
    icon: "url/site1",
  },
  site2: {
    name: "Gallery",
    info: "Gallery designed and presented by Sanaa",
    icon: "url/site2",
  },
  site3: {
    name: "Theatre",
    info: "Theatre designed and architected by Sanaa",
    icon: "url/site3",
  },
  site4: {
    name: "Statue",
    info: "Statue built by Tadao Ando",
    icon: "url/site4",
  }
};

const imgSchema = {
  site1: {
    images: {
      image1: "image1/url",
      image2: "image2/url",
      image3: "image3/url"
    }
  },
    images: {
      image1: "image1/url",
      image2: "image2/url",
      image3: "image3/url"
    }
  },
  site3: {
    images: {
      image1: "image1/url",
      image2: "image2/url",
      image3: "image3/url"
    }
  },
  site4: {
    images: {
      image1: "image1/url",
      image2: "image2/url",
      image3: "image3/url"
    }
  }
};

const ids = [
  "site1",
  "site2",
  "site3",
  "site4"
];

export const getIds = () => {
  return ids;
}

export const getSites = (ids) => {
  let sites = {};
  for(let i = 0; i<ids.length; i++){
    sites[`${ids[i]}`] = schema.ids[i];
  }
  return sites;
}

export const getImages = (ids) => {
  let images = {};
  for(let i = 0; i<ids.length; i++){
    images[`${ids[i]}`] = imgSchema.ids[i];
  }
  return images;
}
