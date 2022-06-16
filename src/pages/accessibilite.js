import React from 'react'

import MagicLink from 'components/base/MagicLink'
import Web from 'components/layout/Web'

export default function accessibilite() {
  return (
    <Web title={'Accessibilité'}>
      <h1>Déclaration d’accessibilité</h1>
      <p>
        L’ADEME s’engage à rendre ses sites internet accessibles conformément à
        l’article 47 de la loi n° 2005-102 du 11 février 2005.
        <br />
        La présente déclaration d’accessibilité s’applique au site Datagir.
      </p>
      <h2>État de conformité</h2>
      <p>
        Le site Datagir (https://datagir.ademe.fr/) est conforme avec le
        référentiel général d’amélioration de l’accessibilité, RGAA version 4.1,
        en raison des non-conformités énumérées dans la section « Résultats des
        tests ».
      </p>
      <h2>Résultats des tests</h2>
      <p>
        L’audit de conformité réalisé le 15/02/2022 par la société Access42
        révèle que le site est conforme à 51,47 % au RGAA version 4.1.
      </p>
      <h3>Contenus inaccessibles</h3>
      <p>
        Les contenus listés ci-dessous ne sont pas accessibles pour les raisons
        suivantes.
      </p>
      <h4>Non-conformités</h4>
      <ul>
        <li>Des images porteuses d’information n’ont pas d’alternative ;</li>
        <li>
          Des images de décoration ne sont pas ignorées des technologies
          d’assistance ;
        </li>
        <li>
          Des images porteuses d’informations complexes nécessitent une
          description détaillée ;
        </li>
        <li>
          Des images possèdent des légendes qui ne sont pas correctement
          reliées ;
        </li>
        <li> Un cadre (iframe) n'a pas de titre pertinent ;</li>
        <li> Une information est véhiculée uniquement par la couleur ;</li>
        <li>
          Des textes et des composants d’interfaces ont des contrastes
          insuffisants ;
        </li>
        <li>
          Un contenu multimédia n’a pas de transcription textuelle ni
          d’audiodescription et pas de sous-titres pertinents ;
        </li>
        <li> Des graphiques n’ont pas d’alternative ;</li>
        <li>
          Des tableaux ont des titres qui ne sont pas correctement définis ni
          pertinents ;
        </li>
        <li> Des liens n'ont pas d’intitulé ou pas d’intitulé explicite ;</li>
        <li>
          Des fonctionnalités JavaScript ne sont pas compatibles avec les
          technologies d’assistance (notamment des boutons et des contenus qui
          s’affichent et se masquent), ou font un usage inapproprié de
          propriétés ARIA ;
        </li>
        <li>
          Des changements de contexte se déclenchent sans que l’utilisateur en
          soit informé ;
        </li>
        <li>
          Des messages de statut ne sont pas restitués par les technologies
          d’assistance ;
        </li>
        <li> L’indication de langue par défaut n’est pas pertinente ;</li>
        <li>
          Des pages font usage de balises à des fins de présentation (par
          exemple des textes non structurés dans des balises de paragraphes) ;
        </li>
        <li>
          Des pages ont une hiérarchie de titres non pertinente (titres
          manquants ou mal définis) ;
        </li>
        <li>
          La structure et les zones principales des pages sont mal définies ;
        </li>
        <li>Des suites d’éléments ne sont pas structurées avec des listes ;</li>
        <li>
          Des balises ou attributs HTML de présentation sont présents dans
          certaines pages ;
        </li>
        <li> Des indications visuelles de prise de focus sont désactivées ;</li>
        <li>
          Certains contenus additionnels apparaissant au survol ne sont pas
          atteignables au clavier ;
        </li>
        <li>
          Des champs de formulaires n'ont pas d'étiquette correctement liée ;
        </li>
        <li>
          Des aides à la saisie sont absentes pour les champs qui attendent un
          format particulier, et des champs obligatoires ne sont pas
          correctement indiqués ;
        </li>
        <li>
          Certains champs de formulaire qui attendent une donnée personnelle de
          l'utilisateur ne sont pas identifiés ;
        </li>
        <li>
          Il manque un lien d’accès rapide au contenu principal des pages ;
        </li>
        <li>
          Des pages présentent des problèmes dans le parcours de tabulation en
          raison d’éléments masqués ;
        </li>
        <li> Des documents PDF ne possèdent pas d’alternative accessible.</li>
      </ul>
      <h2>Établissement de cette déclaration d’accessibilité</h2>
      <p>Cette déclaration a été établie le 12/05/2022.</p>
      <h3>Technologies utilisées pour la réalisation du site</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <h3>
        Agents utilisateurs, technologies d’assistance et outils utilisés pour
        vérifier l’accessibilité
      </h3>
      <p>
        Les tests des pages web ont été effectués avec les combinaisons de
        navigateurs web et lecteurs d’écran suivants :
      </p>
      <ul>
        <li>Firefox 97 et NVDA 2021.3 ;</li>
        <li>Firefox 97 et JAWS 2020 ;</li>
        <li>Safari 15.0 et VoiceOver (macOS Big Sur, version 11.6) ;</li>
        <li>Chrome 96.0 et TalkBack (Android natif 10.0).</li>
      </ul>
      <p>
        La vérification de l’accessibilité est le résultat de tests manuels,
        assistés par des outils (feuilles CSS dédiés, extensions HeadingsMaps et
        WebDeveloper Toolbar, Color Contrast Analyser).
      </p>
      <h3>Pages du site ayant fait l’objet de la vérification de conformité</h3>
      <ul>
        <li>
          Accueil : https://datagir.ademe.fr/ Mentions légales :
          https://datagir.ademe.fr/mentions-legales
        </li>
        <li>Alimentation : https://datagir.ademe.fr/alimentation</li>
        <li> Simulateur : https://datagir.ademe.fr/apps/nos-gestes-climat/ </li>
        <li>Jeux de données : https://datagir.ademe.fr/jeux-de-donnees</li>
        <li> Qui sommes-nous : https://datagir.ademe.fr/qui-sommes-nous </li>
        <li>Blog : https://datagir.ademe.fr/blog</li>
        <li>
          Article :
          https://datagir.ademe.fr/blog/nos-gestes-climat-version-campus/
        </li>
        <li>
          Article avec tableau :
          https://datagir.ademe.fr/blog/budget-empreinte-carbone-c-est-quoi/
        </li>
        <li>Statistiques : https://datagir.ademe.fr/stats</li>
      </ul>
      <h2>Retour d’information et contact</h2>
      <p>
        Il est important de rappeler qu’en vertu de l’article 11 de la loi de
        février 2005 :
        <br />
        « la personne handicapée a droit à la compensation des conséquences de
        son handicap, quels que soient l’origine et la nature de sa déficience,
        son âge ou son mode de vie. »
        <br />
        L’ADEME s'engage à prendre les moyens nécessaires afin de donner accès,
        dans un délai raisonnable, aux informations et fonctionnalités
        recherchées par la personne handicapée, que le contenu fasse l'objet
        d'une dérogation ou non. L’ADEME invite les personnes qui
        rencontreraient des difficultés à la contacter (rgaa@ademe.fr) afin
        qu’une assistance puisse être apportée (alternative accessible,
        information et contenu donnés sous une autre forme).
      </p>
      <h2>Voies de recours</h2>
      <p>
        Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à
        un contenu ou une fonctionnalité du site, que vous nous le signalez et
        que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes
        en droit de faire parvenir vos doléances ou une demande de saisine au
        Défenseur des droits. Plusieurs moyens sont à votre disposition :
      </p>
      <ul>
        <li>
          <MagicLink to='https://formulaire.defenseurdesdroits.fr/defenseur/code/afficher.php?ETAPE=informations'>
            un formulaire de contact
          </MagicLink>{' '}
          ;
        </li>
        <li>
          <MagicLink to='www.defenseurdesdroits.fr/office/'>
            la liste du ou des délégués de votre région
          </MagicLink>{' '}
          avec leurs informations de contact direct ;
        </li>
        <li>un numéro de téléphone : 09 69 39 00 00 ;</li>
        <li>
          une adresse postale (courrier gratuit, sans affranchissement) : Le
          Défenseur des droits - Libre réponse 71120 - 75342 Paris CEDEX 07.
        </li>
      </ul>
    </Web>
  )
}
