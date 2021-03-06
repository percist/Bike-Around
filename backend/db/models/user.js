'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          }
        }
      },
      firstName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          len: [3, 30]
        }
        },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [3, 50]
        }
        },
      email: {
        type: DataTypes.STRING(256),
        unique: true,
        allowNull: false,
        validate: {
          len: [3, 256]
        }
        },
      zip: {
        type: DataTypes.STRING(10),
        validate: {
          len: [5, 10]
        }
        },
      phoneNumber: {
        type: DataTypes.STRING(30),
        validate: {
          len: [12, 30]
        }
        },
      profilePictureUrl: {
        type: DataTypes.STRING(256)
      }, 
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
        }
        
      }, 
      {
        defaultScope: {
          attributes: {
            exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
          }
        },
        scopes: {
          currentUser: {
            attributes: { exclude: ['hashedPassword'] }
          },
          loginUser: {
            attributes: {}
          }
        }
      }
    );
  User.associate = function(models) {

  };
  
  User.prototype.toSafeObject = function () {
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ 
    username, 
    firstName,
    lastName,
    email, 
    password 
  }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      firstName,
      lastName,
      email,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.editProfile = async function (updatedUser) {
    const hashedPassword = bcrypt.hashSync(newPassword);
    const currentUser = await User.scope('currentUser').findByPk(user.id);
    for (key in updatedUser){
      if (updatedUser[key] !== "") {
        currentUser.key = updatedUser[key]
      }
      await currentUser.save();
      await sequelize.close();
    }
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};