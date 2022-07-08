#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: produit
#------------------------------------------------------------

CREATE TABLE produit(
        idProduit          Int  Auto_increment  NOT NULL ,
        nomProduit         Varchar (50) NOT NULL ,
        prixProduit        Int NOT NULL ,
        marqueProduit      Varchar (50) NOT NULL ,
        descriptionProduit Varchar (255) NOT NULL ,
        imageProduit       Varchar (255) NOT NULL ,
        stockProduit       Int NOT NULL
	,CONSTRAINT produit_PK PRIMARY KEY (idProduit)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: commande
#------------------------------------------------------------

CREATE TABLE commande(
        idCommande       Int  Auto_increment  NOT NULL ,
        quantiteCommande Int NOT NULL ,
        idUtilisateur    Int NOT NULL
	,CONSTRAINT commande_PK PRIMARY KEY (idCommande)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: utilisateur
#------------------------------------------------------------

CREATE TABLE utilisateur(
        idUtilisateur       Int  Auto_increment  NOT NULL ,
        nomUtilisateur      Varchar (50) NOT NULL ,
        prenomUtilisateur   Varchar (50) NOT NULL ,
        mailUtilisateur     Varchar (50) NOT NULL ,
        adresseUtilisateur  Varchar (50) NOT NULL ,
        passwordUtilisateur Varchar (255) NOT NULL ,
        statutClient        Int NOT NULL ,
        idPanier            Int NOT NULL
	,CONSTRAINT utilisateur_PK PRIMARY KEY (idUtilisateur)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: panier
#------------------------------------------------------------

CREATE TABLE panier(
        idPanier      Int  Auto_increment  NOT NULL ,
        idUtilisateur Int NOT NULL
	,CONSTRAINT panier_PK PRIMARY KEY (idPanier)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Contient
#------------------------------------------------------------

CREATE TABLE Contient(
        idCommande Int NOT NULL ,
        idProduit  Int NOT NULL
	,CONSTRAINT Contient_PK PRIMARY KEY (idCommande,idProduit)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Avoir
#------------------------------------------------------------

CREATE TABLE Avoir(
        idProduit Int NOT NULL ,
        idPanier  Int NOT NULL
	,CONSTRAINT Avoir_PK PRIMARY KEY (idProduit,idPanier)
)ENGINE=InnoDB;




ALTER TABLE commande
	ADD CONSTRAINT commande_utilisateur0_FK
	FOREIGN KEY (idUtilisateur)
	REFERENCES utilisateur(idUtilisateur);

ALTER TABLE utilisateur
	ADD CONSTRAINT utilisateur_panier0_FK
	FOREIGN KEY (idPanier)
	REFERENCES panier(idPanier);

ALTER TABLE utilisateur 
	ADD CONSTRAINT utilisateur_panier0_AK 
	UNIQUE (idPanier);

ALTER TABLE panier
	ADD CONSTRAINT panier_utilisateur0_FK
	FOREIGN KEY (idUtilisateur)
	REFERENCES utilisateur(idUtilisateur);

ALTER TABLE panier 
	ADD CONSTRAINT panier_utilisateur0_AK 
	UNIQUE (idUtilisateur);

ALTER TABLE Contient
	ADD CONSTRAINT Contient_commande0_FK
	FOREIGN KEY (idCommande)
	REFERENCES commande(idCommande);

ALTER TABLE Contient
	ADD CONSTRAINT Contient_produit1_FK
	FOREIGN KEY (idProduit)
	REFERENCES produit(idProduit);

ALTER TABLE Avoir
	ADD CONSTRAINT Avoir_produit0_FK
	FOREIGN KEY (idProduit)
	REFERENCES produit(idProduit);

ALTER TABLE Avoir
	ADD CONSTRAINT Avoir_panier1_FK
	FOREIGN KEY (idPanier)
	REFERENCES panier(idPanier);
