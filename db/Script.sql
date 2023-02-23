-- Contacto
CREATE TABLE Contacto (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(256) NOT NULL,
    Apellido VARCHAR(256) NOT NULL,
    Telefono INT NOT NULL,
    Correo VARCHAR(256)
);

DELIMITER //
CREATE PROCEDURE SP_CrearContacto (
    IN nombreParam VARCHAR(256),
    IN apellidoParam VARCHAR(256),
    IN teléfonoParam INT,
    IN correoParam VARCHAR(256)
)
BEGIN
    INSERT INTO Contacto (Nombre, Apellido, Teléfono, Correo) VALUES (nombreParam, apellidoParam, teléfonoParam, correoParam);
    SELECT * FROM Contacto;
END;
//
CREATE PROCEDURE SP_ListarContactos ()
BEGIN
    SELECT * FROM Contacto;
END;
//
CREATE PROCEDURE SP_ModificarContacto (
    IN idParam INT,
    IN nombreParam VARCHAR(256),
    IN apellidoParam VARCHAR(256),
    IN telefonoParam INT,
    IN correoParam VARCHAR(256)
)
BEGIN
    UPDATE Contacto SET Nombre = nombreParam, Apellido = apellidoParam, Telefono = telefonoParam, Correo = correoParam
    WHERE Id = idParam;
    SELECT * FROM Contacto;
END;
//
CREATE PROCEDURE SP_EliminarContacto (
    IN idParam INT
)
BEGIN
    DELETE FROM Contacto WHERE Id = idParam;
    SELECT * FROM Contacto;
END;
//
DELIMITER ;
