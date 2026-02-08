import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Nos Vins',
  description: 'Explorez les cuvees du Domaine de Lapistoule: Malbec de Cahors, rose de saignee et blanc sec IGP Cotes du Lot.',
  alternates: { canonical: '/vins/' },
};

export default function Page() {
  return (
    <main>
            {/* HERO */}
            <section className="hero">
                <div className="hero-bg">
                    <img src={withBasePath('/assets/images/home/hero-vineyard-poster.jpg')} alt="Vue panoramique des vignes du Domaine de Lapistoule sous le ciel de Cahors" />
                    <div className="hero-overlay"></div>
                    <div className="hero-gradient"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title" data-reveal="fade-up">
                        Nos Vins
                        <span className="hero-subtitle">L'expression du Terroir de Luzech</span>
                    </h1>
                    <p className="hero-text delay-300" data-reveal="fade-up">
                        Des vins sincères, fruits d'une viticulture respectueuse et d'un savoir-faire familial.
                    </p>
                </div>
                <div className="scroll-indicator">
                    <i data-lucide="arrow-down" width="32" height="32"></i>
                </div>
            </section>
    
            {/* MENU DES VINS (Ancres) */}
            <section className="section section-bg-alt section-spacing-large">
                <div className="container">
                    <div className="text-center max-w-text mb-xl">
                        <span className="subtitle-small">La Sélection</span>
                        <h2 className="value-title mb-md" style={{}}>Découvrir nos Vins</h2>
                        <p className="text-dark text-lg opacity-80">Cliquez pour accéder au détail de chaque cuvée.</p>
                    </div>
                    <div className="wines-grid">
                        {/* Card 1 */}
                        <div className="wine-card">
                            <div className="wine-image-wrapper">
                                <img src={withBasePath('/assets/images/home/wine-bottle-cuvee-tanays.webp')}
                                    alt="Bouteille Cuvée Tanays - AOP Cahors 100% Malbec, vin de garde du Domaine de Lapistoule"
                                    className="wine-image" />
                                <div className="wine-badge">Vin de Garde</div>
                            </div>
                            <div className="wine-content">
                                <div>
                                    <h3 className="wine-title">Cuvée Tanays</h3>
                                    <p className="wine-desc">L'héritage. 100% Malbec, vieilles vignes, structuré et profond.</p>
                                </div>
                                <a href="#cuvee-tanays" className="btn btn-link">
                                    Voir le détail <i data-lucide="arrow-down" width="16"></i>
                                </a>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="wine-card">
                            <div className="wine-image-wrapper">
                                <img src={withBasePath('/assets/images/home/wine-bottle-le-pas-sage.webp')}
                                    alt="Bouteille Le Pas Sage - AOP Cahors 100% Malbec élevé 12 mois en barrique"
                                    className="wine-image" />
                                <div className="wine-badge">Vin de Plaisir</div>
                            </div>
                            <div className="wine-content">
                                <div>
                                    <h3 className="wine-title">Le Pas Sage</h3>
                                    <p className="wine-desc">L'élégance boisée. 100% Malbec, 12 mois barrique, fruit intense.
                                    </p>
                                </div>
                                <a href="#le-pas-sage" className="btn btn-link">
                                    Voir le détail <i data-lucide="arrow-down" width="16"></i>
                                </a>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="wine-card">
                            <div className="wine-image-wrapper">
                                <img src={withBasePath('/assets/images/home/wine-bottle-fleur-de-pecher.webp')}
                                    alt="Bouteille Fleur de Pêcher - Rosé de saignée 100% Malbec, IGP Côtes du Lot"
                                    className="wine-image" />
                                <div className="wine-badge">Rosé Fruité</div>
                            </div>
                            <div className="wine-content">
                                <div>
                                    <h3 className="wine-title">Fleur de Pêcher</h3>
                                    <p className="wine-desc">Rosé 100% Malbec. Notes florales, fraîcheur et gourmandise.</p>
                                </div>
                                <a href="#fleur-de-pecher" className="btn btn-link">
                                    Voir le détail <i data-lucide="arrow-down" width="16"></i>
                                </a>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="wine-card">
                            <div className="wine-image-wrapper">
                                <img src={withBasePath('/assets/images/home/wine-bottle-grain-de-blanc.webp')}
                                    alt="Bouteille Grain de Blanc - Vin blanc sec IGP Côtes du Lot, Chardonnay et Viognier"
                                    className="wine-image" />
                                <div className="wine-badge">Blanc Sec</div>
                            </div>
                            <div className="wine-content">
                                <div>
                                    <h3 className="wine-title">Grain de Blanc</h3>
                                    <p className="wine-desc">IGP Côtes du Lot. Chardonnay minéral, vif et élégant.</p>
                                </div>
                                <a href="#grain-de-blanc" className="btn btn-link">
                                    Voir le détail <i data-lucide="arrow-down" width="16"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* CATALOGUE */}
            <section className="catalogue-section">
                <div className="container">
    
                    {/* VIN 1: Grain de Blanc */}
                    <div id="grain-de-blanc" className="product-block row">
                        <div className="product-image" data-reveal="fade-right">
                            <div className="image-backdrop"></div>
                            <img src={withBasePath('/assets/images/wines/grain-de-blanc-bottle.webp')}
                                alt="Bouteille Grain de Blanc - Vin blanc sec IGP Côtes du Lot, assemblage Chardonnay et Viognier" className="bottle-img" />
                        </div>
                        <div className="product-content" data-reveal="fade-left">
                            <span className="badge">VIN BLANC SEC</span>
                            <h2 className="product-title serif">Grain de Blanc</h2>
                            <h3 className="product-subtitle">IGP Côtes du Lot - Chardonnay & Viognier</h3>
                            <p className="product-desc">
                                Une alliance subtile entre la fraîcheur minérale du Chardonnay et les notes florales du
                                Viognier.
                                Un blanc vif et aromatique qui éveille les papilles.
                            </p>
                            <ul className="product-attributes">
                                <li><span className="attr-label">Nez :</span> Fleurs blanches, pêche de vigne, agrumes.</li>
                                <li><span className="attr-label">Bouche :</span> Attaque franche, belle tension, finale fruitée.
                                </li>
                                <li><span className="attr-label">Accords :</span> Apéritif, fruits de mer, fromages de chèvre
                                    frais.</li>
                            </ul>
                            <div className="product-actions">
                                <a href={withBasePath('/assets/documents/wines/grain-de-blanc-tech-sheet.pdf')} className="btn-download"
                                    download>
                                    <i data-lucide="file-down" width="18"></i>
                                    Télécharger la fiche
                                </a>
                            </div>
                        </div>
                    </div>
    
                    {/* VIN 2: Fleur de Pêcher (Reverse) */}
                    <div id="fleur-de-pecher" className="product-block row-reverse">
                        <div className="product-image" data-reveal="fade-left">
                            <div className="image-backdrop"></div>
                            <img src={withBasePath('/assets/images/wines/fleur-de-pecher-bottle.webp')} alt="Bouteille Fleur de Pêcher - Rosé de saignée 100% Malbec, IGP Côtes du Lot"
                                className="bottle-img" />
                        </div>
                        <div className="product-content" data-reveal="fade-right">
                            <span className="badge">ROSÉ DE SAIGNÉE</span>
                            <h2 className="product-title serif">Fleur de Pêcher</h2>
                            <h3 className="product-subtitle">IGP Côtes du Lot - Malbec</h3>
                            <p className="product-desc">
                                La gourmandise à l'état pur. Un rosé de saignée 100% Malbec, couleur pétale de rose,
                                offrant une explosion de fruits rouges et une rondeur désaltérante.
                            </p>
                            <ul className="product-attributes">
                                <li><span className="attr-label">Nez :</span> Petits fruits rouges, bonbon anglais.</li>
                                <li><span className="attr-label">Bouche :</span> Ample, gourmande, finale acidulée.</li>
                                <li><span className="attr-label">Accords :</span> Grillades, salades estivales, cuisine
                                    asiatique.</li>
                            </ul>
                            <div className="product-actions">
                                <a href={withBasePath('/assets/documents/wines/fleur-de-pecher-tech-sheet.pdf')} className="btn-download"
                                    download>
                                    <i data-lucide="file-down" width="18"></i>
                                    Télécharger la fiche
                                </a>
                            </div>
                        </div>
                    </div>
    
                </div>
            </section>
    
            {/* INTERLUDE PHILOSOPHIE */}
            <section className="interlude-philosophie">
                <div className="container">
                    <div className="philosophie-content-wrapper fade-element">
                        <i data-lucide="quote" className="quote-icon" width="40" height="40"></i>
                        <blockquote className="philosophie-quote">
                            Nous cultivons nos vignes dans le respect du vivant, certifiés HVE, pour offrir des vins
                            sincères qui racontent l'histoire de notre terre.
                        </blockquote>
                    </div>
                </div>
            </section>
    
            {/* SUITE CATALOGUE */}
            <section className="catalogue-section">
                <div className="container">
    
                    {/* VIN 3: Le Pas Sage */}
                    <div id="le-pas-sage" className="product-block row">
                        <div className="product-image" data-reveal="fade-right">
                            <div className="image-backdrop"></div>
                            <img src={withBasePath('/assets/images/wines/le-pas-sage-bottle.webp')} alt="Bouteille Le Pas Sage - AOP Cahors 100% Malbec élevé 12 mois en barriques de chêne français"
                                className="bottle-img" />
                        </div>
                        <div className="product-content" data-reveal="fade-left">
                            <span className="badge">VIN ROUGE - ÉLEVAGE FÛT</span>
                            <h2 className="product-title serif">Le Pas Sage</h2>
                            <h3 className="product-subtitle">AOP Cahors - 100% Malbec</h3>
                            <p className="product-desc">
                                L'élégance boisée rencontre la puissance du Malbec. Élevé 12 mois en barriques de chêne
                                français,
                                c'est un vin structuré qui sait rester soyeux. Un classique moderne.
                            </p>
                            <ul className="product-attributes">
                                <li><span className="attr-label">Nez :</span> Fruits noirs confiturés, vanille, épices douces.
                                </li>
                                <li><span className="attr-label">Bouche :</span> Tanins fondus, volume en bouche, boisé élégant.
                                </li>
                                <li><span className="attr-label">Accords :</span> Magret de canard, confit, fromages affinés.
                                </li>
                            </ul>
                            <div className="product-actions">
                                <a href={withBasePath('/assets/documents/wines/le-pas-sage-tech-sheet.pdf')} className="btn-download" download>
                                    <i data-lucide="file-down" width="18"></i>
                                    Télécharger la fiche
                                </a>
                            </div>
                        </div>
                    </div>
    
                    {/* VIN 4: Cuvée Tanays (Reverse) */}
                    <div id="cuvee-tanays" className="product-block row-reverse">
                        <div className="product-image" data-reveal="fade-left">
                            <div className="image-backdrop"></div>
                            <img src={withBasePath('/assets/images/wines/cuvee-tanays-bottle.webp')} alt="Bouteille Cuvée Tanays - AOP Cahors sélection parcellaire, vieilles vignes 100% Malbec, vin de garde"
                                className="bottle-img" />
                        </div>
                        <div className="product-content" data-reveal="fade-right">
                            <span className="badge">VIN DE GARDE - VIEILLES VIGNES</span>
                            <h2 className="product-title serif">Cuvée Tanays</h2>
                            <h3 className="product-subtitle">AOP Cahors - Sélection Parcellaire</h3>
                            <p className="product-desc">
                                L'héritage du domaine. Issu de nos plus vieilles vignes sur les terrasses argilo-calcaires.
                                Un vin d'une profondeur exceptionnelle, taillé pour traverser le temps.
                            </p>
                            <ul className="product-attributes">
                                <li><span className="attr-label">Nez :</span> Complexe, truffe, mûre, sous-bois.</li>
                                <li><span className="attr-label">Bouche :</span> Dense, minérale, longueur impressionnante.</li>
                                <li><span className="attr-label">Accords :</span> Gibiers, côte de bœuf, plats en sauce mijotés.
                                </li>
                            </ul>
                            {/* Pas de fiche technique pour l'instant */}
                        </div>
                    </div>
    
                </div>
            </section>
    
        </main>
  );
}
