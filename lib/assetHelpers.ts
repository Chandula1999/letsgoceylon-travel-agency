import assetsConfig from '@/public/assets/assets.json';

export interface Asset {
    id: string;
    path: string;
    alt: string;
    category: string;
    usedIn: string[];
}

export interface AssetsConfig {
    tours: Asset[];
    categories: Asset[];
    vehicles: Asset[];
    blog: Asset[];
    videos: Asset[];
    branding: Asset[];
}

const assets = assetsConfig as AssetsConfig;

/**
 * Get an asset by its unique ID
 * @param id - The unique identifier for the asset
 * @returns The asset object or undefined if not found
 */
export function getAssetById(id: string): Asset | undefined {
    const allAssets = [
        ...assets.tours,
        ...assets.categories,
        ...assets.vehicles,
        ...assets.blog,
        ...assets.videos,
        ...assets.branding,
    ];

    return allAssets.find(asset => asset.id === id);
}

/**
 * Get all assets in a specific category
 * @param category - The category name (tours, categories, vehicles, blog, videos, branding)
 * @returns Array of assets in that category
 */
export function getAssetsByCategory(category: keyof AssetsConfig): Asset[] {
    return assets[category] || [];
}

/**
 * Get just the path string for an asset
 * @param id - The unique identifier for the asset
 * @returns The asset path or empty string if not found
 */
export function getAssetPath(id: string): string {
    const asset = getAssetById(id);
    return asset ? asset.path : '';
}

/**
 * Get path and alt text for an asset
 * @param id - The unique identifier for the asset
 * @returns Object with path and alt properties, or null if not found
 */
export function getAssetWithAlt(id: string): { path: string; alt: string } | null {
    const asset = getAssetById(id);
    return asset ? { path: asset.path, alt: asset.alt } : null;
}

/**
 * Get all tour images
 * @returns Array of tour image assets
 */
export function getTourAssets(): Asset[] {
    return assets.tours;
}

/**
 * Get all category images
 * @returns Array of category image assets
 */
export function getCategoryAssets(): Asset[] {
    return assets.categories;
}

/**
 * Get all vehicle images
 * @returns Array of vehicle image assets
 */
export function getVehicleAssets(): Asset[] {
    return assets.vehicles;
}

/**
 * Get all blog images
 * @returns Array of blog image assets
 */
export function getBlogAssets(): Asset[] {
    return assets.blog;
}

/**
 * Get video assets
 * @returns Array of video assets
 */
export function getVideoAssets(): Asset[] {
    return assets.videos;
}

/**
 * Get branding assets (logos)
 * @returns Array of branding assets
 */
export function getBrandingAssets(): Asset[] {
    return assets.branding;
}

export default assets;
