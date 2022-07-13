-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 04 juil. 2022 à 13:16
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `casse`
--

-- --------------------------------------------------------

--
-- Structure de la table `concerner`
--

DROP TABLE IF EXISTS `concerner`;
CREATE TABLE IF NOT EXISTS `concerner` (
  `ID_vehicule` int(11) NOT NULL,
  `ID_piece` int(11) NOT NULL,
  PRIMARY KEY (`ID_vehicule`,`ID_piece`),
  KEY `Concerner_Piece0_FK` (`ID_piece`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `piece`
--

DROP TABLE IF EXISTS `piece`;
CREATE TABLE IF NOT EXISTS `piece` (
  `ID_piece` int(11) NOT NULL AUTO_INCREMENT,
  `reference_pièce` int(11) NOT NULL,
  `categorie_pièce` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_pièce` int(11) NOT NULL,
  `ID_prix` int(11) NOT NULL,
  PRIMARY KEY (`ID_piece`),
  KEY `Piece_Prix_FK` (`ID_prix`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `piece`
--

INSERT INTO `piece` (`ID_piece`, `reference_pièce`, `categorie_pièce`, `date_pièce`, `ID_prix`) VALUES
(1, 22, 'Pneumatique', 2020, 1);

-- --------------------------------------------------------

--
-- Structure de la table `prix`
--

DROP TABLE IF EXISTS `prix`;
CREATE TABLE IF NOT EXISTS `prix` (
  `ID_prix` int(11) NOT NULL AUTO_INCREMENT,
  `prix` float NOT NULL,
  PRIMARY KEY (`ID_prix`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `prix`
--

INSERT INTO `prix` (`ID_prix`, `prix`) VALUES
(1, 390000);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `pseudo`, `email`, `password`) VALUES
(3, 'Francis', 'Francis@lalanne.fr', '$2y$10$8fx5cywbuwjR./jLxnr5DOZpDnTfGqt5qS6tZx0Pzv2uMTODNKHOe'),
(2, 'Francis', 'Francis@lalanne.fr', '$2y$10$Dua6PJhEvVA6EB/9QgqemeUmFasN40rNIocjD/28lSO39RdYl1gmG'),
(4, 'JeanJacques', 'test@jp.fr', '$2y$10$4Erf1Tpy576D/FHLJM9Eoe1vq/yLl8k.QvJ0Y0ufvXIKrGQk.Eq5.');

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

DROP TABLE IF EXISTS `vehicule`;
CREATE TABLE IF NOT EXISTS `vehicule` (
  `ID_vehicule` int(11) NOT NULL AUTO_INCREMENT,
  `marque_vehicule` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modele_vehicule` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `annee_vehicule` int(11) NOT NULL,
  PRIMARY KEY (`ID_vehicule`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`ID_vehicule`, `marque_vehicule`, `modele_vehicule`, `annee_vehicule`) VALUES
(2, 'peugeot', '207', 2009);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `concerner`
--
ALTER TABLE `concerner`
  ADD CONSTRAINT `Concerner_Piece0_FK` FOREIGN KEY (`ID_piece`) REFERENCES `piece` (`ID_piece`),
  ADD CONSTRAINT `Concerner_Vehicule_FK` FOREIGN KEY (`ID_vehicule`) REFERENCES `vehicule` (`ID_vehicule`);

--
-- Contraintes pour la table `piece`
--
ALTER TABLE `piece`
  ADD CONSTRAINT `Piece_Prix_FK` FOREIGN KEY (`ID_prix`) REFERENCES `prix` (`ID_prix`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
