export type ThumbnailFormat = "Png"|"Jpeg"
export type ThumbnailReturnPolicy = "PlaceHolder"|"AutoGenerated"|"ForceAutoGenerated"


// [ ASSETS ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/assets
export type AssetSize = "30x30"|"42x42"|"50x50"|"60x62"|"75x75"|"110x110"|"140x140"|"150x150"|"160x100"|"160x600"|"250x250"|"256x144"|"300x250"|"304x166"|"384x216"|"396x216"|"420x420"|"480x270"|"512x512"|"576x324"|"700x700"|"728x90"|"768x432"|"1200x80"
export type AssetsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedAssetsData = {
  [assetId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}

// GET /v1/assets-thumbnail-3d
export type Asset3dData = {
  targetId: number,
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}

// GET /v1/asset-thumbnail-animated
export type AssetAnimatedData = {
  targetId: number,
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ BADGES ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/badges/icons
export type BadgesData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedBadgesData = {
  [badgeId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ BUNDLES ] ///////////////////////////////////////////////////////////////////////////////////////////////////////
export type BundleSize = "150x150"|"420x420"

// GET /v1/bundles/thumbnails
export type BundlesData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedBundlesData = {
  [bundleId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ DEVELOPER PRODUCTS ] ////////////////////////////////////////////////////////////////////////////////////////////
export type DeveloperProductSize = "150x150"|"420x420"

// GET /v1/developer-products/icons
export type DeveloperProductsData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedDeveloperProductsData = {
  [developerProductId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ GAME PASSES ] ///////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/game-passes
export type GamePassesData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedGamePassesData = {
  [gamePassId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ GAMES ] /////////////////////////////////////////////////////////////////////////////////////////////////////////
export type GameThumbnailSize = "256x144" | "384x216" | "480x270" | "576x324" | "768x432"

// GET /v1/games/{universeId}/thumbnails
export type GameFromThumbnailIdsData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedGameFromThumbnailIdsData = {
  [gameThumbnailId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}

// GET /v1/games/icons
export type GamesIconSize = "50x50" | "128x128" | "150x150" | "256x256" | "512x512"
export type GamesIconsData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedGamesIconsData = {
  [gameIconId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}

// GET /v1/games/multiget/thumbnails
export type GamesData = {
  data: {
    universeId: number,
    error: unknown,
    thumbnails: {
      targetId: number,
      state:  "Completed" | "Pending" | "Error",
      imageUrl: string
    }[]
  }[]
}
export type FormattedGamesData = {
  [universeId: number]: {
    error: unknown,
    thumbnails: {
      targetId: number,
      state: "Completed" | "Pending" | "Error",
      imageUrl: string
    }[]
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ GROUP EMBLEM ] //////////////////////////////////////////////////////////////////////////////////////////////////
// /v1/groups/icons
export type GroupEmblemSize = "150x150"|"420x420"
export type GroupsEmblemsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedGroupsEmblemsData = {
  [groupId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ METADATA ] //////////////////////////////////////////////////////////////////////////////////////////////////////
// /v1/metadata
export type MetadataData = {
  isWebappUseCacheEnabled: boolean,
  webappCacheExpirationTimspan: string
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ PLACES ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// /v1/places/gameicons
export type PlaceThumbnailSize = "50x50"|"128x128"|"150x150"|"256x256"|"512x512"
export type PlacesIconsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedPlacesIconsData = {
  [placeId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ AVATAR ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/users/avatar
export type AvatarFullSize = "30x30"|"48x48"|"60x60"|"75x75"|"100x100"|"110x110"|"140x140"|"150x150"|"180x180"|"250x250"|"352x352"|"420x420"|"720x720"
export type AvatarsFullData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedAvatarsFullData = {
  [userId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}

// GET /v1/users/avatar-3d
export type Avatar3dData = {
  targetId: number
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}

// GET /v1/users/avatar-bust
export type AvatarBustSize = "48x48"|"50x50"|"60x60"|"75x75"|"100x100"|"150x150"|"180x180"|"352x352"|"420x420"
export type AvatarsBustsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedAvatarsBustsData = {
  [userId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}

// GET /v1/users/avatar-headshot
export type AvatarHeadshotSize = "48x48"|"50x50"|"60x60"|"75x75"|"100x100"|"110x110"|"150x150"|"180x180"|"352x352"|"420x420"|"720x720"
export type AvatarsHeadshotsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedAvatarsHeadshotsData = {
  [userId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ OUTFITS ] ///////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/users/outfit-3d
export type Outfit3dData = {
  targetId: number
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}

// GET /v1/users/outfits
export type OutfitSize = "150x150"|"420x420"
export type OutfitsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
export type FormattedOutfitsData = {
  [outfitId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [ BATCH ] /////////////////////////////////////////////////////////////////////////////////////////////////////////
export type BatchType = "Avatar"|"AvatarHeadShot"|"GameIcon"|"BadgeIcon"|"GameThumbnail"|"GamePass"|"Asset"|"BundleThumbnail"|"Outfit"|"GroupIcon"|"DeveloperProduct"|"AutoGeneratedAsset"|"AvatarBust"|"PlaceIcon"|"AutoGeneratedGameIcon"|"ForceAutoGeneratedGameIcon"
export type BatchRequest = {
  requestId?: string,
  targetId: number,
  token?: string,
  alias?: string,
  type: BatchType,
  size: string,
  format: string,
  isCircular: boolean
}
export type BatchResponseElement = {
  requestId: string | null,
  errorCode: number,
  errorMessage: string | "",
  targetId: number,
  state: "Completed" | "Pending" | "Error",
  imageUrl: string | null
}

// POST /v1/batch
export type BatchData = {
  data: BatchResponseElement[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////