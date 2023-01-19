import { nanoid } from "nanoid";
import { Link } from "../models/Link.js";

export const createLink = async (req, res) => {
  try {
    const { longLink } = req.body;
    const link = new Link({
      longLink,
      shortLink: nanoid(6),
      userId: req.userId,
    });

    const newLink = await link.save();
    return res.status(201).json(newLink);
  } catch (error) {
    console.log(error);
  }
};

export const getLinks = async (req, res) => {
  try {
    const links = await Link.find({ userId: req.userId });

    return res.json(links);
  } catch (error) {
    console.log(error);
  }
};

export const getLink = async (req, res) => {
  try {
    const { id } = req.params;

    const link = await Link.findById(id);

    if (!link) {
      return res.status(404).json({ message: "Links not found" });
    }

    if (!link.userId.equals(req.userId)) {
      return res.status(401).json({ message: "Link not c" });
    }

    return res.json(link);
  } catch (error) {
    console.log(error);
  }
};

export const updateLink = async (req, res) => {};

export const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;

    const link = await Link.findById(id);

    if (!link) {
      return res.status(404).json({ message: "Links not found" });
    }

    if (!link.userId.equals(req.userId)) {
      return res.status(401).json({ message: "Link not c" });
    }

    const responseLink = await link.remove();

    return res.json(responseLink);
  } catch (error) {
    console.log(error);
  }
};
